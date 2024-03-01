import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between px-5 h-8 items-center">
      <div>@ 2024 Discover With Aaron</div>
      <div>
        <Link href={"https://www.linkedin.com/in/aaron-pulido-salinas"}>LinkedIn</Link>
      </div>
    </footer>
  );
}
