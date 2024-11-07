"use client"
// imports methods relevant to the react framework
import * as React from 'react';
// library we use to interact with the solana json rpc api
import * as web3 from '@solana/web3.js';
// allows us access to methods and components which give us access to the solana json rpc api and user's wallet data
import * as walletAdapterReact from '@solana/wallet-adapter-react';
// allows us to choose from the available wallets supported by the wallet adapter
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';
// imports a component which can be rendered in the browser
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// applies the styling to the components which are rendered on the browser

// imports methods for deriving data from the wallet's data store
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

function Navbar() {
  const [balance, setBalance] = React.useState<number | null>(0);
  const endpoint = web3.clusterApiUrl('devnet');
  // we specify which wallets we want our wallet adapter to support
  const wallets = [
    new walletAdapterWallets.PhantomWalletAdapter()
  ];

  const { connection } = useConnection();
  // user's public key of the wallet they connected to our application
  const { publicKey } = useWallet();

  React.useEffect(() => {
    const getInfo = async () => {
      if (connection && publicKey) {
        try {
          console.log('Fetching account info for:', publicKey.toString());
          const info = await connection.getAccountInfo(publicKey);
          if (info) {
            setBalance(info.lamports / web3.LAMPORTS_PER_SOL);
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
    <div className='flex justify-between'>
      <h1>Zenith Lending Protocol</h1>
      <div className='flex items-center'>
      {/* provides a connection to the solana json rpc api */}
      <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
        {/* makes the wallet adapter available to the entirety of our application (wrapped in this component) */}
        <walletAdapterReact.WalletProvider wallets={wallets}>
          {/* provides components to the wrapped application */}
          <WalletModalProvider>
            <main className='min-h-screen text-white'>
              <div className=' gap-4 p-4'>
                <div className='grid grid-cols-2'>
                  <div className=''>
                   
                    <WalletMultiButton />
                  </div>

                  <div className='flex bg-[#222524] border-2 border-gray-500 rounded-lg p-2'>
                    <p className='tracking-wider'>Balance...</p>
                    <p className='text-helius-orange italic font-semibold'>
                      {balance}
                    </p>




                  </div>
                </div>
              </div>
            </main>
          </WalletModalProvider>
        </walletAdapterReact.WalletProvider>
      </walletAdapterReact.ConnectionProvider>
      </div>

    </div>
  )
}

export default Navbar
