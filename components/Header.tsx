interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>

      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <hr />
    </header>
  );
}

export default Header;