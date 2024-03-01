import Image from "next/image";

export default function Home() {
  return (
    <main className="home-layout">
      <section className="latest-content">
        <h1 className="font-medium uppercase text-2xl underline underline-offset-4">
          Latest Content
        </h1>
        <article className="blog-post">
          <Image
            src={"/images/easytax.webp"}
            width={180}
            height={180}
            alt="Image"
            className="blog-post-img"
          />
          <div className="pl-3">
            <div className="blog-post-head">
              <h3 className="font-medium underline underline-offset-2">EasyTax</h3>
              <div className="blog-post-tags">
                <ul className="flex gap-2">
                    <li className="border border-black p-1 text-xs rounded-lg">Android</li>
                    <li className="border border-black p-1 text-xs rounded-lg">Flutter</li>
                </ul>
              </div>
            </div>
            <p className="blog-post-desc">
              EasyTax is the senior design project our group is working on. This
              mobile application aims to provide utilities for processing your
              Income Tax Return easier.
            </p>
          </div>
        </article>
      </section>
      <section className="continue-content">
        <h2 className="text-xl">History</h2>
      </section>
    </main>
  );
}
