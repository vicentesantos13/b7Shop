"use client";
import { data } from "@/data/data";
import { Product } from "@/types/Product";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type EntitiesProviderProps = {
  children: ReactNode;
};
type EntitiesContextProps = {
  cartActive: boolean;
  setCartActive: (value: boolean) => void;
  products: Product[];
  setProducts: (value: Product[]) => void;
  cartContent: Product[];
  setCartContent: (value: Product[]) => void;
};
const EntitiesContext = createContext<EntitiesContextProps>(
  {} as EntitiesContextProps
);

export function EntitiesProvider({ children }: EntitiesProviderProps) {
  const [cartActive, setCartActive] = useState(false);
  const [products, setProducts] = useState<Product[]>(data);
  const [cartContent, setCartContent] = useState<Product[]>(() => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem("cart");
      if (stored) {
        const storedParse = JSON.parse(stored);
        return storedParse;
      } else {
        return [];
      }
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContent));
  }, [cartContent]);

  return (
    <EntitiesContext.Provider
      value={{
        cartActive,
        setCartActive,
        products,
        setProducts,
        cartContent,
        setCartContent,
      }}
    >
      {children}
    </EntitiesContext.Provider>
  );
}

export function useEntities() {
  const context = useContext(EntitiesContext);

  return context;
}
