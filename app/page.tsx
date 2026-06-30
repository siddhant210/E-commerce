import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <main>
      <Header title="E-Commerce Store" />

      <Wrapper>
        <h2>Welcome to Our Store</h2>

        <ProductFilter />

        <hr />

        <ProductList />
      </Wrapper>

      <Footer companyName="E-Commerce Store" />
    </main>
  );
}