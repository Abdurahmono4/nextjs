import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";
import Link from "next/link";
function Home() {
  return (
    <div
      className="ml-auto mr-auto flex  flex-col bg-white 
    "
    >
      <nav className="navbar ml-auto mr-auto items-center text-center w-96  gap-10">
        <Link href="/">Home</Link>
        <Link href="./about">About</Link>
        <Link href="./contact">contact</Link>
        <Link href="./product">product</Link>
        <Link href="./about">About</Link>
      </nav>
      <ProductList />
    </div>
  );
}

export default Home;
