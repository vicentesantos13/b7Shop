"use client";

import { useEntities } from "@/context/Context";
import { ProductItem } from "./ProductItem";
import Image from "next/image";

export const ProductsList = () => {
  const { products, setProducts, cartActive } = useEntities();

  return (
    <div className="px-6 mt-12 xl:px-0 xl:max-w-7xl m-auto">
      <div className="flex items-center">
        <Image
          src="/assets/tag.png"
          alt="Tag de preço"
          width={20}
          height={20}
        />
        <span className="font-poppins text-gray1B font-medium ml-2">
          Descontos imperdíveis
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-6 gap-4">
        {!products && <span>Não existem produtos!</span>}
        {products &&
          products.map((item, index) => (
            <ProductItem item={item} index={index} key={index} />
          ))}
      </div>
    </div>
  );
};
