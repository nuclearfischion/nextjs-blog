import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../../src/components'

export default function FirstPost() {
  return(
    <div>
      <Navbar></Navbar>
      <div className="container">
        <nav>
          <Link href='/posts'>Back to posts</Link>
        </nav>
        <h1 className="title">hello</h1>

      </div>
    </div>
  )
}