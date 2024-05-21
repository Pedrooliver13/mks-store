"use client";

// Components
import { Card } from "components/shared";
import { Header, SectionList, Footer } from "components/core";

// Hooks
import { useGetProducts } from "hooks/useGetProducts";

export default function Home() {
  const { data } = useGetProducts();

  return (
    <>
      <Header />
      <main>
        <SectionList>
          {data?.products.map((product) => (
            <Card key={product?.id} {...product} />
          ))}
        </SectionList>
      </main>
      <Footer />
    </>
  );
}
