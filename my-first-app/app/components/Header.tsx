"use client"

import Link from "next/link"

export default function Header() {
  return (
    <nav>
      <Link href="/">Home</Link> |{" "}
      <Link href="/pages/about">About</Link> |{" "}
      <Link href="/pages/blog/1">Blog</Link>
    </nav>
  )
}
