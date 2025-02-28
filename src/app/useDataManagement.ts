import { useState, useEffect } from "react";
import { typeData, typeTimer } from "./assets/type";
import { sumDataList } from "./assets/data";

export const useDataManagement = () => {
  const [sumData, setSumData] = useState<typeData[]>(sumDataList || []);
  const [fruitList, setFruitList] = useState<typeData[]>([]);
  const [vegetableList, setVegetableList] = useState<typeData[]>([]);
  const [itemTimers, setItemTimers] = useState<typeTimer[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      const itemsDue = itemTimers.filter((item) => item.expireAt <= now);
      
      if (itemsDue.length > 0) {
        itemsDue.forEach((item) => moveToMainList(item.item));
        setItemTimers((prevTimers) =>
          prevTimers.filter((timer) => timer.expireAt > now)
        );
      }
    }, 200);
    
    return () => clearInterval(intervalId);
  }, [itemTimers]);

  const moveToMainList = (item: typeData) => {
    if (item.type === "Fruit") {
      setFruitList((prev) =>
        prev.filter((fruit) => fruit.name !== item.name)
      );
    } else {
      setVegetableList((prev) =>
        prev.filter((veg) => veg.name !== item.name)
      );
    }
    
    setSumData((prev) => [...prev, item]);
  };

  const handleColumnClick = (item: typeData) => {
    const targetList = item.type === "Fruit" ? fruitList : vegetableList;
    const setTargetList = item.type === "Fruit" ? setFruitList : setVegetableList;
    
    if (!targetList.find((listItem) => listItem.name === item.name)) {
      setTargetList((prev) => [...prev, item]);
      setItemTimers((prev) => [
        ...prev,
        { item, expireAt: Date.now() + 5000 },
      ]);
    }
    
    setSumData((prev) => prev.filter((data) => data.name !== item.name));
  };

  return {
    sumData,
    fruitList,
    vegetableList,
    moveToMainList,
    handleColumnClick,
  };
};