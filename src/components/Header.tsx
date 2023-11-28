"use client";
import { useEntities } from "@/context/Context";
import Image from "next/image";
import { Cart } from "./Cart";

export const Header = () => {
  const { cartActive, setCartActive } = useEntities();

  const handleOpenCart = () => {
    setCartActive(!cartActive);
  };
  return (
    <div className="border-b border-grayD9">
      <div className="flex justify-between items-center px-6 py-6 xl:max-w-7xl xl:px-0 m-auto relative">
        <h1 className="font-poppins text-blueB7Shop text-3xl font-semibold">
          bseteshop
        </h1>
        {!cartActive && (
          <div
            className="flex items-center justify-center border-2 border-grayD9 w-14 aspect-square cursor-pointer rounded-md"
            onClick={handleOpenCart}
          >
            <Image
              src="/assets/cartBlue.png"
              width={24}
              height={24}
              alt="Icone carrinho"
            />
          </div>
        )}
        {cartActive && (
          <>
            <div
              className="flex items-center justify-center border-2 border-grayD9 bg-blueB7Shop w-14 aspect-square cursor-pointer rounded-md"
              onClick={handleOpenCart}
            >
              <Image
                src="/assets/cartWhite.png"
                width={24}
                height={24}
                alt="Icone carrinho"
              />
            </div>
            <Cart />
          </>
        )}
      </div>
    </div>
  );
};
