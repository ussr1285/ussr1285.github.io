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
      </Head>

      <div className="landing">
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
