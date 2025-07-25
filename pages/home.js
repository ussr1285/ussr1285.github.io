import Link from 'next/link'
import Head from 'next/head'
import { getAllPosts } from '../lib/posts'
import { format } from 'date-fns'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - 블로그</title>
      </Head>
      
      <div className="container">
        <Link href="/" className="back-link">← 돌아가기</Link>
        
        <h1>블로그 포스트</h1>
        
        <div className="blog-list">
          {posts.map(post => (
            <article key={post.slug} className="blog-post">
              <h2>
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <div className="date">
                {format(new Date(post.date), 'yyyy.MM.dd')}
              </div>
              <div className="excerpt">
                {post.excerpt}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  
  return {
    props: {
      posts
    }
  }
}