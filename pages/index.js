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
        <title>jmj blog</title>
        <meta name="description" content="jmj blog" />
      </Head>

      <div className="landing">
        <TenorEmbed postId="27091473" />
        <h1>Welcome!<span className="mobile-break"> </span>jmj blog</h1>

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
