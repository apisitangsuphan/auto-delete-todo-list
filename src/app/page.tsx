"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sumDataList, typeData } from "./assets/data";

export default function Home() {
  const [sumData, setSumData] = useState<typeData[]>(sumDataList || []);
  const [fruitList, setFruitList] = useState<typeData[]>([]);
  const [vegetableList, setVegetableList] = useState<typeData[]>([]);
  
  useEffect(() => {
    const timers = [...fruitList,...vegetableList].map(item => 
      setTimeout( () => moveToMainList(item),5000)
    )
    return () => timers.forEach(timer => clearTimeout(timer))
  },[fruitList,vegetableList])

  const moveToMainList = (item:typeData) => {
    if(item.type === "Fruit"){
      setFruitList(fruitList => fruitList.filter(fruit => fruit.name !== item.name));
    }else{
      setVegetableList(vegetableList => vegetableList.filter(veg => veg.name !== item.name))
    }
    setSumData((prev => [...prev,item]));
  }

  const handleColumnClick = (item: typeData) => {
    if(item.type === "Fruit"){
      setFruitList(fruitList => [...fruitList,item]);
    }else{
      setVegetableList(vegetableList => [...vegetableList,item])
    }
    setSumData(sumData => sumData.filter(sumData => sumData.name !== item.name));
  };

  return (
    <div className="container mt-20 mx-auto justify-center">
      <div className="grid grid-cols-3 gap-4 text-center mx-5 max-w-[1000px]">
        <div className="main border-2 border-slate-500 h-[500px]">
          
          {sumData.map((data) => {
            return (<button type="button" key={data.name} onClick={() => {}}>
              {data.name}
              </button>
            );
          })}
        </div>
        <div className="fruit border-2 border-slate-500 h-[500px]">
          <h1 className="bg-slate-200">Fruit</h1>
        </div>
        <div className="vegetable border-2 border-slate-500">
        <h1 className="bg-slate-200">Vegetable</h1>
        </div>
      </div>
    </div>
  );
}
