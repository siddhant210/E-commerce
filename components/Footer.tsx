interface FooterProps {
  companyName: string;
}

function Footer({ companyName }: FooterProps) {
  return (
    <footer>
      <hr />

      <p>© 2026 {companyName}</p>
    </footer>
  );
}

export default Footer;