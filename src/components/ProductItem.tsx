"use client";
import { useEntities } from "@/context/Context";
import { Product } from "@/types/Product";

type ProductType = {
  item: Product;
  index: number;
};
export const ProductItem = ({ item, index }: ProductType) => {
  const { cartContent, setCartContent } = useEntities();

  const handleAddCart = () => {
    let newProducts = [...cartContent, item];
    setCartContent(newProducts);
  };

  return (
    <div key={index} className="font-poppins">
      <div className="border border-grayD9 w-full aspect-square rounded-lg flex justify-center items-center">
        <div
          style={{ backgroundImage: `url(${item.img})` }}
          className="w-11/12 aspect-square bg-center bg-no-repeat  bg-contain"
        ></div>
      </div>
      <div className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray1B font-medium mt-4">
        {item.name}
      </div>
      <div className="text-gray1B text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
        R$ {item.price}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-blueB7Shop font-medium">
        Em até {item.max_parcels}x de R${" "}
        {(item.price / item.max_parcels).toFixed(2)}
      </div>
      <button
        className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium w-full max-h-12 aspect-[35/10] bg-greenButton rounded mt-3"
        onClick={() => handleAddCart()}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};
