'use client'
import * as React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL,  Transaction, SystemProgram } from '@solana/web3.js';


export default function DepositPage() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = React.useState('');
  const [balance, setBalance] = React.useState(0);

  React.useEffect(() => {
    const savedBalance = localStorage.getItem('walletBalance');
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    }
  }, []);

  const handleDeposit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!publicKey || !connection) return;

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey, // Sending to the same wallet for demonstration
          lamports: LAMPORTS_PER_SOL * parseFloat(amount)
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      
      const newBalance = balance + parseFloat(amount);
      setBalance(newBalance);
      localStorage.setItem('walletBalance', newBalance.toString());
      
      alert(`Deposit successful! New balance: ${newBalance} SOL`);
      setAmount('');
    } catch (error) {
      console.error('Error:', error);
      alert(`Deposit failed: ${error}`);
    }
  };

  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Deposit SOL</h2>
      <p className="mb-4">Current Balance: {balance} SOL</p>
      <form onSubmit={handleDeposit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount in SOL</label>
          <input
            type="number"
            id="amount"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            step="0.000000001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setAmount('')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Deposit
          </button>
        </div>
      </form>
   
    </div>
  );
}