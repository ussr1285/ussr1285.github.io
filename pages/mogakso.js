import Link from 'next/link'
import Head from 'next/head'
import { getAllPosts } from '../lib/posts'
import { format } from 'date-fns'

export default function Mogakso({ posts }) {
  return (
    <>
      <Head>
        <title>모각소 - 블로그</title>
      </Head>
      
      <div className="container">
        <Link href="/" className="back-link">← 돌아가기</Link>
        
        <h1>모각소</h1>
        <p>모각소 활동 페이지입니다.</p>
        
        <div className="blog-list">
          {posts.map(post => (
            <article key={post.slug} className="blog-post">
              <Link href={`/blog/${post.slug}`} className="blog-post-link">
                <div className="post-content">
                  <h2>{post.title}</h2>
                  <div className="date">
                    {format(new Date(post.date), 'yyyy.MM.dd')}
                  </div>
                  <div className="excerpt">
                    {post.excerpt}
                  </div>
                </div>
                {post.thumbnail && (
                  <div className="thumbnail">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                    />
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
  
  // 모각소 관련 글만 필터링
  const mogaksoPosts = allPosts.filter(post => 
    post.title.includes('모각소') || post.slug.includes('모각소')
  )
  
  return {
    props: {
      posts: mogaksoPosts
    }
  }
}