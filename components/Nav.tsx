import Link from "next/link";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sphere">Sphere</Link>
        </li>
        <li>
          <Link href="/square">Square</Link>
        </li>
      </ul>
    </nav>
  );
};
