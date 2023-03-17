import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function AboutPost() {
  return (
    <>
    <Head>
        <title>About</title>
    </Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <main>
      <h1>About</h1>
      <p>
        My name is Danilo Kulisic and I am on my path to
        becoming a Frontend Developer! I am currently learning Javascript on
        freeCodeCamp, and I have recently started to do Codewars Algorithms. I
        have cloned an Apple Page website, and you can check it in the Projects
        section. This is my portfolio website, so you can check what skils I
        have. Feel free to check out the links on the right side of the page!
        Those are the links that will lead you to my social networks and GitHub.
      </p>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      </main>
  </>
  );
}
