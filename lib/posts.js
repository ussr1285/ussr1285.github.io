import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), 'blog')

// MDX 콘텐츠에서 첫 번째 이미지를 추출하는 함수
function extractFirstImage(content, slug) {
  // ![alt](image.jpg) 형태의 마크다운 이미지 찾기
  const markdownImageRegex = /!\[.*?\]\(([^)]+)\)/
  const match = content.match(markdownImageRegex)
  
  if (match && match[1]) {
    const imagePath = match[1]
    // 상대 경로라면 블로그 폴더 기준으로 절대 경로 만들기
    if (!imagePath.startsWith('http') && !imagePath.startsWith('/')) {
      return `/blog/${slug}/${imagePath}`
    }
    return imagePath
  }
  
  return null
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(name => {
      const dirPath = path.join(postsDirectory, name)
      return fs.statSync(dirPath).isDirectory()
    })
    .map(name => {
      const fullPath = path.join(postsDirectory, name, 'index.mdx')
      
      if (!fs.existsSync(fullPath)) {
        return null
      }
      
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        
        // date 파싱 개선
        let parsedDate = '2023-01-01'
        if (matterResult.data.date) {
          // "2022-12-31 14:08" 형식 처리
          const dateStr = matterResult.data.date.toString().split(' ')[0]
          parsedDate = dateStr
        }
        
        // 제목이 없으면 폴더명을 기반으로 생성
        const title = matterResult.data.title || name.replace(/\d{8}$/, '').replace(/\d{6}$/, '')
        
        // excerpt 개선 - 실제 내용에서 추출
        const content = matterResult.content.trim()
        const excerpt = content.length > 150 ? content.substring(0, 150) + '...' : content
        
        // 첫 번째 이미지 추출
        const thumbnail = extractFirstImage(content, name)
        
        return {
          slug: name,
          title: title,
          date: parsedDate,
          content: content,
          excerpt: excerpt,
          thumbnail: thumbnail
        }
      } catch (error) {
        console.error(`Error parsing ${name}:`, error)
        return null
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return allPostsData
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, slug, 'index.mdx')
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    // date 파싱 개선
    let parsedDate = '2023-01-01'
    if (matterResult.data.date) {
      const dateStr = matterResult.data.date.toString().split(' ')[0]
      parsedDate = dateStr
    }
    
    // 제목이 없으면 폴더명을 기반으로 생성
    const title = matterResult.data.title || slug.replace(/\d{8}$/, '').replace(/\d{6}$/, '')
    
    // MDX 직렬화
    const mdxSource = await serialize(matterResult.content)
    
    return {
      slug,
      title: title,
      date: parsedDate,
      mdxSource,
      rawContent: matterResult.content
    }
  } catch (error) {
    console.error(`Error parsing post ${slug}:`, error)
    return null
  }
}