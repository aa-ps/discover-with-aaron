import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Discover more about the blogger and the purpose of this blog.",
};

export default function About() {
  return (
    <main className="prose sm:prose-sm lg:prose-lg mx-auto p-6">
      <h1>About the Blogger</h1>
      <section>
        <h2>Who is the Blogger?</h2>
        <ul>
          <li>Name: Aaron</li>
          <li>Education: Bachelor&apos;s Degree in Computer Science</li>
          <li>Background: Hispanic</li>
          <li>Interests: Passionate about learning</li>
        </ul>
      </section>
      <section>
        <h2>Why Start a Blog?</h2>
        <ul>
          <li>To document the learning journey</li>
          <li>To share knowledge and insights with others</li>
          <li>To gain experience in blogging</li>
          <li>To create a showcase project</li>
          <li>To explore potential side business opportunities</li>
        </ul>
      </section>
      <section>
        <h2>Content Overview</h2>
        <p>The blog covers a wide range of topics related to technology, education, personal development, and more.</p>
      </section>
    </main>
  );
}
