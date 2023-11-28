"use client";
import { useEntities } from "@/context/Context";
import Image from "next/image";

export const Cart = () => {
  const { cartActive, setCartActive, cartContent, setCartContent } =
    useEntities();

  const handleDelete = (id: number) => {
    let index = cartContent.findIndex((object) => object.id === id);

    if (index !== -1) {
      let newArray = [
        ...cartContent.slice(0, index),
        ...cartContent.slice(index + 1),
      ];

      setCartContent(newArray);
    }
  };

  return (
    <div className="absolute border-grayD9 w-full top-24 left-0 sm:left-auto sm:right-0 sm:w-4/5 md:w-3/5 lg:w-2/5 ">
      {cartActive && (
        <div className="h-screen sm:h-full bg-white ">
          <div className="bg-blueB7Shop h-20 px-6 flex items-center  justify-between">
            <div className="flex">
              <Image
                src="/assets/cartWhite.png"
                alt="Cart"
                height={17}
                width={17}
              />
              <h3 className="text-white ml-4">Meus pedidos</h3>
            </div>
            <div>
              <Image
                src="/assets/close.png"
                alt="Close Button"
                width={20}
                height={20}
                onClick={() => setCartActive(false)}
                className="cursor-pointer"
              />
            </div>
          </div>
          {cartContent.length === 0 && (
            <div className="py-10 w-full text-center">
              Seu carrinho está vazio!
            </div>
          )}
          {cartContent.length != 0 &&
            cartContent.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 border-b "
              >
                <div className="flex">
                  <div className="border border-grayD9 w-20 aspect-square rounded-lg flex justify-center items-center mr-4">
                    <div
                      style={{ backgroundImage: `url(${item.img})` }}
                      className="w-11/12 aspect-square bg-center bg-no-repeat  bg-contain"
                    ></div>
                  </div>
                  <div className="flex flex-col font-poppins">
                    <span className="font-medium text-xs">{item.name}</span>
                    <span className="font-semibold text-lg mt-2">
                      R$ {item.price}
                    </span>
                  </div>
                </div>
                <div
                  className="border border-grayD9 w-10 aspect-square rounded-lg flex justify-center items-center cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                >
                  <Image
                    src="/assets/delete.png"
                    alt="Delete"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
