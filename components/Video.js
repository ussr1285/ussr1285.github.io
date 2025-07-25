export default function Video({ videoSrcURL, videoTitle }) {
  return (
    <div style={{ 
      position: 'relative', 
      paddingBottom: '56.25%', 
      height: 0, 
      overflow: 'hidden',
      marginBottom: '1.5rem'
    }}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}