import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="navbar ml-auto mr-auto items-center text-center w-96  gap-10">
        <Link href="/">Home</Link>
        <Link href="/contact">contact</Link>
        <Link href="/product">product</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}

export default Navbar;
