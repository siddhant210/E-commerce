import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          padding: "20px",
          backgroundColor: "#2563eb",
        }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/products">Products</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
//hii sid