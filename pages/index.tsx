import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wiser Platform - Home</title>
      </Head>

      <main>
        <h1>Home Page</h1>
        <Link href="/login">
          <a>
            <button>Go to Login</button>
          </a>
        </Link>
      </main>
    </div>
  );
}
