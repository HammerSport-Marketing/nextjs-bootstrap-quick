import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Preloader from "../components/Preloader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/quick-website.min.css" />
      </Head>
      <Navbar />
      <main  >
        <Hero />
      </main>

      <footer className="text-center d-flex flex-column" > 
      Powered by{" "}
        <a
          href="https://hammersportmarketing.com?utm_source=home-page&utm_medium=website&utm_campaign=redesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/img/brand/logo.png" alt="HammerSport Logo" className="logo m-4 w-25 " />
        </a>
      </footer>
    </div>
  );
}
