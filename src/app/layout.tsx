// Components principales
import Header from '@/components/static/header';

// Imports scss
import '../assets/scss/global.scss';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import { ImageResponse } from 'next/server'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pongámosle nombre',
  description: 'Hay que ponerle nombre, rostro y alto a la violencia. Pongámosle nombre.',
  generator: 'Pongámosle nombre',
  applicationName: 'Pongámosle nombre',
  referrer: 'origin-when-cross-origin',
  keywords: ['Pongámosle nombre', 'Violencia', 'Genero', 'Igualdad'],
  authors: [{ name: 'Pongámosle nombre' }, { name: 'Pongámosle nombre', url: 'https://pongamoslenombre.org' }],
  colorScheme: 'light',
  creator: 'Pongámosle nombre',
  publisher: 'Pongámosle nombre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pongámosle nombre',
    description: 'Hay que ponerle nombre, rostro y alto a la violencia. Pongámosle nombre.',
    images : {
      url : 'https://pongamoslenombre.org/_next/static/media/logo.dd2e9539.svg',
      width: 300,
      height: 300,
      alt: 'Logo de pongamosle nombre'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
