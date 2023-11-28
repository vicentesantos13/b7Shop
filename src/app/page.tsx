import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductsList } from "@/components/ProductsList";
import { EntitiesProvider } from "@/context/Context";

export default function Home() {
  return (
    <main className="">
      <EntitiesProvider>
        <Header />
        <ProductsList />
        <Footer />
      </EntitiesProvider>
    </main>
  );
}
