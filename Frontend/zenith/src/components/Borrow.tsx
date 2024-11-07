'use client'
import * as React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, Transaction, SystemProgram } from '@solana/web3.js';
import Link from 'next/link';

export default function BorrowPage() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [borrowedAmount, setBorrowedAmount] = React.useState(0);
  const maxBorrowRatio = 0.5; // Users can borrow up to 50% of their balance

  React.useEffect(() => {
    const savedBalance = localStorage.getItem('walletBalance');
    const savedBorrowedAmount = localStorage.getItem('borrowedAmount');
    if (savedBalance) {
      setBalance(parseFloat(savedBalance));
    }
    if (savedBorrowedAmount) {
      setBorrowedAmount(parseFloat(savedBorrowedAmount));
    }
  }, []);

  const handleBorrow = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!publicKey || !connection) return;

    const borrowAmount = parseFloat(amount);
    const maxBorrowAmount = balance * maxBorrowRatio - borrowedAmount;

    if (borrowAmount > maxBorrowAmount) {
      alert(`You can only borrow up to ${maxBorrowAmount.toFixed(2)} SOL`);
      return;
    }

    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey, // Sending to the same wallet for demonstration
          lamports: LAMPORTS_PER_SOL * borrowAmount
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      
      const newBorrowedAmount = borrowedAmount + borrowAmount;
      setBorrowedAmount(newBorrowedAmount);
      localStorage.setItem('borrowedAmount', newBorrowedAmount.toString());
      
      alert(`Borrow successful! You've borrowed ${borrowAmount} SOL`);
      setAmount('');
    } catch (error) {
      console.error('Error:', error);
      alert(`Borrow failed: ${error}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Borrow SOL</h2>
      <p className="mb-2">Current Balance: {balance} SOL</p>
      <p className="mb-4">Total Borrowed: {borrowedAmount} SOL</p>
      <p className="mb-4 font-semibold">
        Available to Borrow: {Math.max(balance * maxBorrowRatio - borrowedAmount, 100).toFixed(2)} SOL
      </p>
      <form onSubmit={handleBorrow}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount to Borrow (SOL)</label>
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
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Borrow
          </button>
        </div>
      </form>
      <div className="mt-4">
        <Link href="/deposit" className="text-blue-500 hover:text-blue-600">
          Go to Deposit Page
        </Link>
      </div>
    </div>
  );
}