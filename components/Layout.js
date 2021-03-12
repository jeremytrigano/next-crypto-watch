import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children, page }) {
  return (
    <div className="bg-purple-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/">
            <button className="bg-purple-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-purple-300">
              Accueil
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-purple-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-purple-300">
              À propos
            </button>
          </Link>
        </div>
        {/* Image par <a href="https://pixabay.com/fr/users/thedigitalartist-202249/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3212312">Pete Linforth</a> de <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3212312">Pixabay</a> */}
        <div>
          <Image
            src="/main.jpg"
            alt="header-pic"
            width="400"
            height="25"
            className="rounded-3xl object-cover"
            quality={25}
          />
        </div>
      </header>
      <main className="pt-4 mx-20">{children}</main>
      <footer className="p-10">
        <Image
          src="/main.jpg"
          alt="footer-pic"
          width="1000"
          height="30"
          className="rounded-3xl object-cover"
          quality={50}
        />
        <ul className="pt-10 pb-4 flex justify-around">
          <li>À propos</li>
          <li>Qui sommes-nous</li>
          <li>
            <a href="https://octocode.dev/" target="_blank">
              Octocode
            </a>{' '}
            - 2021
          </li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
          voluptates nemo, eius, perferendis libero reiciendis cum doloremque
          voluptas rem quasi similique dolorum!
        </p>
      </footer>

      <style jsx>{`
        p {
          color: grey;
        }
      `}</style>
    </div>
  );
}
