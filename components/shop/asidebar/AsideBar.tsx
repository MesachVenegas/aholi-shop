'use client'

import { useState } from "react";
import { Title4 } from "@/components/ui";
import AsideButton from "@/components/ui/AsideButton";
import { categories } from "@/libs/constants";


export default function AsideBar() {


  return (
    <aside className="flex flex-col gap-6 w-full lg:w-72 lg:h-screen p-4">
      <div className="flex flex-col gap-3">
        <div>
          <Title4 color="text-rose-700" >Categorías</Title4>
          <hr className="w-full text-rose-100" />
        </div>
        <ul className="flex flex-wrap gap-2">
          {
            categories.map((category, index) => (
              <li key={index} >
                <AsideButton>
                  { category.name }
                </AsideButton>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}
