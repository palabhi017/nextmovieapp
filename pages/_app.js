// import '../styles/globals.css'
import { useMemo } from 'react';
import Navbar from "../components/Navbar";
console.log(useMemo);
export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
    )

}
