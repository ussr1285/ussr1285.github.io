import Link from 'next/link'
import Head from 'next/head'
import { getAllPosts, getPostBySlug } from '../../lib/posts'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote'
import Video from '../../components/Video'
import Image from '../../components/Image'

const components = {
  Video,
  img: Image
}

export default function BlogPost({ post }) {
  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>
  }

  return (
    <>
      <Head>
        <title>{post.title} - 블로그</title>
      </Head>
      
      <div className="blog-content">
        <Link href="/home" className="back-link">← 목록으로</Link>
        
        <h1>{post.title}</h1>
        <div className="meta">
          {format(new Date(post.date), 'yyyy년 MM월 dd일')}
        </div>
        
        <MDXRemote {...post.mdxSource} components={components} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  
  return {
    props: {
      post
    }
  }
}