import React from "react";
import { typeData } from "../types/type";
import { ItemButton } from "./ItemButton";

interface ItemListProps {
  title: string;
  items: typeData[];
  onItemClick: (item: typeData) => void;
}

export const ItemList: React.FC<ItemListProps> = ({
  title,
  items,
  onItemClick,
}) => {
  return (
    <div className="border-2 border-slate-100">
      <div className="flex flex-col">
        <h1 className="bg-slate-100 mb-1">{title}</h1>
        {items.map((item) => (
          <ItemButton key={item.name} item={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};
