import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthProvider.jsx'
import router from './routes/router.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
