import Link from 'next/link'
import Head from 'next/head'

export default function Mogakso() {
  return (
    <>
      <Head>
        <title>Mogakso - 블로그</title>
      </Head>
      
      <div className="container">
        <Link href="/" className="back-link">← 돌아가기</Link>
        
        <h1>모각소</h1>
        <p>모각소 활동 페이지입니다.</p>
      </div>
    </>
  )
}