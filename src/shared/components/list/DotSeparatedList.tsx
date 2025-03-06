import React from "react";

type props<T> = {
  items: T[];
  className?: string;
  keyGenerator?: (item: T) => string;
  itemElement?: (item: T) => React.ReactNode;
};

function DotSeparatedList<T>({
  items,
  className,
  keyGenerator = (item) => `${item}`,
  itemElement,
}: props<T>): React.ReactNode {
  return (
    <ul className={className}>
      {items.map((item, i) => {
        const separator =
          i > 0
            ? "before:content-['•'] before:inline-block before:w-[2ch] before:text-center"
            : null;
        return (
          <li key={keyGenerator(item)} className={`inline ${separator}`}>
            {itemElement ? itemElement(item) : `${item}`}
          </li>
        );
      })}
    </ul>
  );
}

export default DotSeparatedList;
