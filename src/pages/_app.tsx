import '../styles/globals.scss';
import type { AppProps } from 'next/app';;
import 'bootstrap/scss/bootstrap.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
