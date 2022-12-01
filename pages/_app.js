import '../styles/globals.css'
import { wrapper } from '../store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
