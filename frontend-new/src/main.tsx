import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IotaClientProvider, WalletProvider, createNetworkConfig } from '@iota/dapp-kit'
import '@iota/dapp-kit/dist/index.css'
import './index.css'
import App from './App.tsx'

// Create QueryClient
const queryClient = new QueryClient()

// Configure IOTA network
const { networkConfig } = createNetworkConfig({
  testnet: { url: 'https://api.testnet.iota.cafe' },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <IotaClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider autoConnect>
          <App />
        </WalletProvider>
      </IotaClientProvider>
    </QueryClientProvider>
  </StrictMode>,
)
