import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        router.push("/home");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return (
    <>
      <Head>
        <title>환영합니다</title>
        <meta name="description" content="개인 블로그" />
        <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      </Head>

      <div className="landing">
        <div className="tenor-gif-embed" data-postid="27091473" data-share-method="host" data-aspect-ratio="0.75" data-width="200px" style={{marginBottom: '20px'}}>
          <a href="https://tenor.com/view/%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF-gif-27091473">初音ミク GIF</a> from <a href="https://tenor.com/search/%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF-gifs">初音ミク GIFs</a>
        </div>
        <h1>환영합니다</h1>

        <nav className="nav">
          <Link href="/home">home</Link>
          <Link href="/about">about</Link>
          <Link href="/mogakso">mogakso</Link>
        </nav>

        <div className="enter-hint">Press Enter to continue</div>
      </div>
    </>
  );
}
