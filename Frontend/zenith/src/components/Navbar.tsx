'use client'

import * as React from 'react';
import dynamic from 'next/dynamic';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

// Dynamically import wallet components
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

function Navbar() {
  return <InnerNavbar />;
}

function InnerNavbar() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  React.useEffect(() => {
    const getInfo = async () => {
      if (connection && publicKey) {
        try {
          console.log('Fetching account info for:', publicKey.toString());
          const info = await connection.getAccountInfo(publicKey);
          if (info) {
            console.log('Account info:', info.data);
          } else {
            console.warn('Account info is null, wallet might not be connected properly.');
          }
        } catch (error) {
          console.error('Error fetching account info:', error);
        }
      } else {
        console.log('Connection or publicKey is not available.');
      }
    };
    getInfo();
  }, [connection, publicKey]);

  return (
    <div className='flex justify-between items-center p-4 '>
      <h1 className='text-xl font-bold'>Zenith Lending Protocol</h1>
      <div className='flex items-center space-x-4'>
       
        <WalletMultiButtonDynamic />
      </div>
    </div>
  );
}

export default Navbar;