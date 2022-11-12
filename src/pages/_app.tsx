import type { AppProps } from 'next/app'
import theme from 'theme'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import 'remixicon/fonts/remixicon.css'

const LayoutDefault = ({ children }: any) => <>{children}</>

export default function App({ Component, pageProps }: any) {
  const Layout = Component.Layout || LayoutDefault
  const layoutProps = pageProps.layoutProps || {}

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Solid Fm</title>
      </Head>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
