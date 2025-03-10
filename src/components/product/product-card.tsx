"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/schema/zod-schema";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

interface Card1Props {
  product: Product;
}

export default function ProductCard({ product }: Card1Props) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isActive, setIsActive] = useState(false);
  const handleFavoriteClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const colorOptions = [
    { img: product.image, color: "#FF5733" },
    { img: product.image, color: "#33FF57" },
    { img: product.image, color: "#3357FF" },
  ];
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].color);

  const handleColorChange = (img: string, color: string) => {
    setSelectedImage(img);
    setSelectedColor(color);
  };

  const router = useRouter();
  const { addToCart } = useCartStore();

  const handleViewDetails = () => {
    router.push(`/main/products-detail?id=${product._id}`);
  };
  const handleAddToCart = () => {
    addToCart(product);
    toast(`${product.name} has been added to your cart.`, {
      duration: 3000,
    });
  };
  return (
    <div className="w-[300px] mx-auto">
      <div className="rounded-md p-2 bg-gray-100 dark:bg-white">
        <Image
          src={selectedImage || ""}
          alt={product.name}
          width={1000}
          height={1000}
          className="h-52 w-full rounded-md object-cover transition-all duration-300"
        />

        <div className="text-black pt-2">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">{product.name}</h1>
            <motion.button
              className="text-2xl text-red-400 pr-2"
              onClick={handleFavoriteClick}
              animate={{ scale: isActive ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 1000, damping: 10 }}
            >
              {isActive ? <Heart className="fill-red-400" /> : <Heart />}
            </motion.button>
          </div>

          <p className="text-xs">{product.description}</p>

          <div className="flex justify-between py-1">
            <span className="font-semibold text-xl">${product.price}</span>
            <div className="flex gap-2 items-center">
              {colorOptions.map((data) => (
                <button
                  key={data.color}
                  onClick={() => handleColorChange(data.img || "", data.color)}
                  className={`relative w-6 h-6 border rounded-full grid place-content-center transition-all ${
                    selectedColor === data.color
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full inline-block"
                    style={{ backgroundColor: data.color }}
                  />
                </button>
              ))}
            </div>
          </div>

          <Button
            className="w-full bg-black text-white py-3 rounded-md"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
          <Button
            className="w-full bg-black text-white py-3 rounded-md mt-4 "
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
