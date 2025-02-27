'use client'
import React,{useState,useEffect} from 'react'
import Image from "next/image";
import { sumData,typeData } from './assets/data';

export default function Home() {
  const [sumData,setSumData] = useState<typeData[]>([]);
  const [fruitList,setFruitList] = useState<typeData[]>([]);
  const [vegetableLsit,setVegetableList] = useState<typeData[]>([]);
  return (
    <div className="mt-20">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="main"></div>
        <div className="fruit border-2 border-slate-500 h-[500px]">Fruit</div>
        <div className="vegetable border-2 border-slate-500">Vegetable</div>
      </div>
    </div>
  );
}
