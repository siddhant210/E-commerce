import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

export default function Home() {
  return (
    <main>

      <Header title="E-Commerce Store" />

      <Wrapper>

        <h2>Welcome to Our Store</h2>

        <p>
          This is Day 9 React Training.
        </p>

        <Button text="Shop Now" />

      </Wrapper>

      <Footer companyName="E-Commerce Store" />

    </main>
  );
}