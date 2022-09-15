import Head from 'next/head'
import Link from 'next/link'
import { Card, Navbar } from '../../src/components'

export default function Posts() {

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="title">Blog Posts</h1>
        <div>
          <Card
            title='First Post'
            href='/posts/first-post'
            tags={['tag 1', 'noteworthy']}
          ></Card>
          <Card
            title={`Editor's Note`}
            href='/posts/second-post'
            tags={['tag 1', 'noteworthy']}
          ></Card>
        </div>
      </div>
    </div>
  )
}