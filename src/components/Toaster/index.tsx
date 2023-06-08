import { Toaster as ToasterProvider } from 'react-hot-toast'

export function Toaster() {
  return (
    <ToasterProvider
      position="top-right"
      toastOptions={{
        success: {
          duration: 4000,
          style: {
            background: '#10b981',
            color: '#fff',
            padding: '16px',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#10b981',
          },
        },
        error: {
          duration: 4000,
          style: {
            background: '#ef4444',
            color: '#fff',
            padding: '16px',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#ef4444',
          },
        },
      }}
    />
  )
}