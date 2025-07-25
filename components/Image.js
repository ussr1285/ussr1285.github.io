import { useRouter } from 'next/router'

export default function Image({ src, alt, ...props }) {
  const router = useRouter()
  const { slug } = router.query
  
  // 상대경로를 절대경로로 변환
  const imgSrc = src.startsWith('./') 
    ? `/blog/${slug}/${src.substring(2)}`
    : src

  return (
    <img
      src={imgSrc}
      alt={alt}
      style={{
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '1rem'
      }}
      {...props}
    />
  )
}