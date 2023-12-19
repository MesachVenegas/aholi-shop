'use client'

import Image from "next/image";
import { useState } from "react";
import { Input, Title2, Title5 } from "@/components/ui";
import { Label } from "@/components/ui/Label";
import { products } from "@/libs/constants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShopPage() {

  return (
    <div className="flex flex-col justify-center items-center p-4  pb-12">
      <div className="flex w-full">
        <div className="flex-grow"></div>
        <div className="flex items-center w-full max-w-md">
          <Label>
            <FontAwesomeIcon icon={faSearch} className="2-5 h-5" />
            <Input type="search" />
          </Label>
        </div>
      </div>
      <div className="flex flex-wrap justify-around gap-8 p-8">
        {
          products.map( (product, index) => (
            <figure key={index} className="flex flex-col p-2 w-96 h-[500px] border border-rose-700 rounded-lg cursor-pointer">
              <div className="w-full h-[300px] relative">
                <Image
                  src={product.images[0].src}
                  fill={true}
                  alt={product.images[0].description}
                />
              </div>
              <figcaption className="flex flex-col gap-2">
                <Title5>{product.title}</Title5>
                <p>{product.description}</p>
                <span className="flex w-full justify-end text-2xl p-2">
                  ${product.price.toFixed(2)} mxn
                </span>
                <div className="flex w-full gap-2">
                  {
                    product.tags.map( (tag, index) => (
                      <span className="border border-rose-100 text-rose-700 cursor-pointer px-2 rounded-lg" key={tag}>{tag}</span>
                    ))
                  }
                </div>
                <button className="bg-rose-700/80 hover:bg-rose-700 p-2 rounded-md text-white w-full">
                  Comprar
                </button>
              </figcaption>
            </figure>
          ))
        }
      </div>
    </div>
  )
}
