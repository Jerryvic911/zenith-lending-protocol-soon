'use client'

import * as React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, Transaction, SystemProgram, PublicKey } from '@solana/web3.js';
import Link from 'next/link';

export default function RepaymentPage() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [borrowedAmount, setBorrowedAmount] = React.useState(0);

  React.useEffect(() => {
    const fetchBalanceAndBorrowed = async () => {
      if (publicKey && connection) {
        const fetchedBalance = await connection.getBalance(publicKey);
        setBalance(fetchedBalance / LAMPORTS_PER_SOL);

        const savedBorrowedAmount = localStorage.getItem('borrowedAmount');
        if (savedBorrowedAmount) {
          setBorrowedAmount(parseFloat(savedBorrowedAmount));
        }
      }
    };

    fetchBalanceAndBorrowed();
  }, [publicKey, connection]);

  const handleRepay = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!publicKey || !connection) return;

    const repayAmount = parseFloat(amount);

    if (repayAmount > balance) {
      alert('Insufficient balance for repayment');
      return;
    }

    if (repayAmount > borrowedAmount) {
      alert('Repayment amount exceeds borrowed amount');
      return;
    }

    try {
      // For this example, we'll send the repayment to a fixed address
      // In a real application, this would be the address of the lending protocol
      const lendingProtocolAddress = new PublicKey('11111111111111111111111111111111');

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: lendingProtocolAddress,
          lamports: LAMPORTS_PER_SOL * repayAmount
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');
      
      const newBorrowedAmount = borrowedAmount - repayAmount;
      setBorrowedAmount(newBorrowedAmount);
      localStorage.setItem('borrowedAmount', newBorrowedAmount.toString());
      
      // Update balance after successful transaction
      const newBalance = await connection.getBalance(publicKey);
      setBalance(newBalance / LAMPORTS_PER_SOL);
      
      alert(`Repayment successful! ${repayAmount} SOL repaid`);
      setAmount('');
    } catch (error) {
      console.error('Error:', error);
      alert(`Repayment failed: ${error}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Repay Borrowed SOL</h2>
      <p className="mb-2">Current Balance: {balance.toFixed(2)} SOL</p>
      <p className="mb-4">Total Borrowed: {borrowedAmount.toFixed(2)} SOL</p>
      <form onSubmit={handleRepay}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount to Repay (SOL)</label>
          <input
            type="number"
            id="amount"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            step="0.01"
            min="0.01"
            max={Math.min(balance, borrowedAmount)}
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
            Repay
          </button>
        </div>
      </form>
      <div className="mt-4 space-y-2">
        <Link href="/borrow" className="block text-blue-500 hover:text-blue-600">
          Go to Borrow Page
        </Link>
        <Link href="/deposit" className="block text-blue-500 hover:text-blue-600">
          Go to Deposit Page
        </Link>
      </div>
    </div>
  );
}