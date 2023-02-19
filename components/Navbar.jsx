
import Link from "next/link"
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/movies">Home</Link>
        <Link href="/watchlist">Watchlist</Link>
        </div>
  )
}

export default Navbar