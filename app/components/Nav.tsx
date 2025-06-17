import Link from "next/link";

export default function Nav(): any {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/ContactUs">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
