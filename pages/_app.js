import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/index.css'
import {SessionProvider} from 'next-auth/react'
export default function App({ Component, pageProps,session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
