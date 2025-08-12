import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const TenorEmbed = dynamic(() => import("../components/TenorEmbed"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "200px", height: "150px", marginBottom: "20px" }}>
      Loading...
    </div>
  ),
});

export default function Home() {
  const router = useRouter();
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      if (!audioPlayed) {
        const audio = new Audio("/mikudayo_notification.mp3");
        audio.play().catch((e) => console.log("Audio play failed:", e));
        setAudioPlayed(true);
        document.removeEventListener("click", playAudio);
        document.removeEventListener("keydown", playAudio);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        router.push("/blog");
      }
    };

    // 사용자 상호작용 시 오디오 재생
    document.addEventListener("click", playAudio);
    document.addEventListener("keydown", playAudio);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("keydown", playAudio);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router, audioPlayed]);

  return (
    <>
      <Head>
        <title>jmj blog</title>
        <meta name="description" content="jmj blog" />
      </Head>

      <div className="landing">
        <TenorEmbed postId="27091473" />
        <h1>Welcome!<span className="mobile-break"> </span>jmj blog</h1>

        <nav className="nav">
          <Link href="/blog">blog</Link>
          <Link href="/about">about</Link>
          <Link href="/mogakso">mogakso</Link>
        </nav>

        <div className="enter-hint">Press Enter to continue</div>
      </div>
    </>
  );
}
