"use client";
import React from "react";
import { useDataManagement } from "./useDataManagement";
import { ItemButton } from "./ItemButton";
import { ItemList } from "./ItemList";

export default function Home() {
  const {
    sumData,
    fruitList,
    vegetableList,
    moveToMainList,
    handleColumnClick,
  } = useDataManagement();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 text-center mx-auto p-10 max-w-[800px] h-[300px]">
        <div className="flex flex-col">
          {sumData.map((item) => (
            <ItemButton key={item.name} item={item} onClick={handleColumnClick} />
          ))}
        </div>
        
        <ItemList
          title="Fruit"
          items={fruitList}
          onItemClick={moveToMainList}
        />
        
        <ItemList
          title="Vegetable"
          items={vegetableList}
          onItemClick={moveToMainList}
        />
      </div>
    </div>
  );
}