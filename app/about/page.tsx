import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about the blogger and why he blogs!",
};

export default function About() {
  return (
    <main className="prose sm:prose-sm lg:prose-lg">
      <h1>Learn more about the blogger!</h1>
      <section>
        <h2>Who Is The Mysterious Blogger?</h2>
        <ul>
          <li>His name is Aaron.</li>
          <li>He is a college student.</li>
          <li>He is majoring in Computer Science.</li>
          <li>He is hispanic.</li>
          <li>He enjoys learning!</li>
        </ul>
      </section>
      <section>
        <h2>Why Blog?</h2>
        <ul>
          <li>He wants to to document his learning journey.</li>
          <li>He wants to share his knowledge with others.</li>
          <li>He wants to learn how to blog.</li>
          <li>He wants to have a cool project to show off.</li>
          <li>He wants to have a side business.</li>
        </ul>
      </section>
      <section>
        <h2>What Type Of Content Is Posted?</h2>
        <ul>
          <li>Everything!</li>
        </ul>
      </section>
    </main>
  );
}
