import { Product } from "@/lib/models/ProductModel";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="card mb-4 bg-base-300 shadow-xl">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl font-bold">₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
