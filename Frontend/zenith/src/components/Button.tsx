'use client'

import * as React from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

// Dynamically import wallet components


function Button() {
  return <InnerNavbar />
}

function InnerNavbar() {
  const { connection } = useConnection()
  const { publicKey, wallet } = useWallet()

  React.useEffect(() => {
    const getInfo = async () => {
      if (connection && publicKey) {
        try {
          console.log('Fetching account info for:', publicKey.toString())
          const info = await connection.getAccountInfo(publicKey)
          if (info) {
            console.log('Account info:', info.data)
          } else {
            console.warn('Account info is null, wallet might not be connected properly.')
          }
        } catch (error) {
          console.error('Error fetching account info:', error)
        }
      } else {
        console.log('Connection or publicKey is not available.')
      }
    }
    getInfo()
  }, [connection, publicKey])

  React.useEffect(() => {
    // Apply custom styles
    const style = document.createElement('style')
    style.textContent = `
      .wallet-adapter-button-trigger {
        background-color: #dc2626 !important;
      }
      .wallet-adapter-button-trigger:not([disabled]):hover {
        background-color: ##bf082e !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="space-x-4 ">
    <WalletMultiButton
      className="custom-wallet-button"
    >
      {wallet ? (publicKey ? publicKey.toBase58().slice(0, 4) + '..' + publicKey.toBase58().slice(-4) : 'Connect') : 'Connect Wallet'}
    </WalletMultiButton>
  
  </div>
  )
}

export default Button