import Link from 'next/link'
import Head from 'next/head'

export default function Guestbook() {
  return (
    <>
      <Head>
        <title>Guestbook - 블로그</title>
      </Head>
      
      <div className="container">
        <Link href="/" className="back-link">← 돌아가기</Link>
        
        <h1>Guestbook</h1>
        <p>방명록 페이지입니다.</p>
      </div>
    </>
  )
}