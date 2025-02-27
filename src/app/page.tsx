"use client";
import React, { useState, useEffect } from "react";
import { sumDataList, typeData } from "./assets/data";

export default function Home() {
  const [sumData, setSumData] = useState<typeData[]>(sumDataList || []);
  const [fruitList, setFruitList] = useState<typeData[]>([]);
  const [vegetableList, setVegetableList] = useState<typeData[]>([]);

  useEffect(() => {
    const timers = [...fruitList, ...vegetableList].map((item) =>
      setTimeout(() => moveToMainList(item), 5000)
    );
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [fruitList, vegetableList]);

  const moveToMainList = (item: typeData) => {
    if (item.type === "Fruit") {
      setFruitList((fruitList) =>
        fruitList.filter((fruit) => fruit.name !== item.name)
      );
    } else {
      setVegetableList((vegetableList) =>
        vegetableList.filter((veg) => veg.name !== item.name)
      );
    }
    setSumData((prev) => [...prev, item]);
  };

  const handleColumnClick = (item: typeData) => {
    if (item.type === "Fruit") {
      setFruitList((fruitList) => [...fruitList, item]);
    } else {
      setVegetableList((vegetableList) => [...vegetableList, item]);
    }
    setSumData((sumData) =>
      sumData.filter((sumData) => sumData.name !== item.name)
    );
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 text-center mx-auto p-10 max-w-[800px] h-[300px]">
        <div className="flex flex-col">
          {sumData.map((item) => {
            return (
              <button
                type="button"
                key={item.name}
                onClick={() => handleColumnClick(item)}
                className="border-2 border-slate-100 mb-1 hover:bg-slate-100 hover:cursor-pointer"
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="fruit border-2 border-slate-100 ">
          <div className=" flex flex-col">
            <h1 className="bg-slate-100 mb-1">Fruit</h1>
            {fruitList.map((item) => {
              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => moveToMainList(item)}
                  className="border-2 border-slate-100 mb-1 mx-1 hover:bg-slate-100 hover:cursor-pointer"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="vegetable border-2 border-slate-100">
          <div className=" flex flex-col">
            <h1 className="bg-slate-100 mb-1">Vegetable</h1>
            {vegetableList.map((item) => {
              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => moveToMainList(item)}
                  className="border-2 border-slate-100 mb-1 mx-1 hover:bg-slate-100 hover:cursor-pointer"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
