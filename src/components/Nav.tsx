import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav>
    <ul className=" flex flex-row gap-5">
      <li className="text-white">
        <Link href="/">Home</Link>
      </li>
      <li className="text-white">
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Nav