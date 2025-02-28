import React from "react";
import { typeData } from "./assets/type";

interface ItemButtonProps {
  item: typeData;
  onClick: (item: typeData) => void;
}

export const ItemButton: React.FC<ItemButtonProps> = ({ item, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className="item-btn"
    >
      {item.name}
    </button>
  );
};
