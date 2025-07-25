import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - 블로그</title>
      </Head>
      
      <div className="container">
        <Link href="/" className="back-link">← 돌아가기</Link>
        
        <h1>About</h1>
        <p>개인 블로그입니다.</p>
      </div>
    </>
  )
}