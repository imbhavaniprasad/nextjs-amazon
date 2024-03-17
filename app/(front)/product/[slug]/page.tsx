import AddToCart from "@/components/products/AddToCart";
import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetails = ({ params }: { params: { slug: String } }) => {
  const product = data.products.find((a) => a.slug === params.slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <>
      <div className="my-2">
        <Link href="/">Back to Home</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              height: "auto",
              width: "100%",
              objectFit: "contain",
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              {product.rating} of {product.numReviews} Reviews
            </li>
            <li>{product.brand}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Description : <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb2 flex justify-between">
                <div>Price</div>
                <div>₹{product.price}</div>
              </div>
              <div className="mb2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In stock" : "Out of stock"}
                </div>
              </div>
              {product.countInStock > 0 ? (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{ ...product, qty: 0, color: "", size: "" }}
                  />
                </div>
              ) : (
                <p>Out of stock</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
