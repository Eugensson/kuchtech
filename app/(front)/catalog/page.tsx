import { Metadata } from "next";

import { categoryList } from "@/lib/data";
import CategoryItem from "@/components/CategoryItem";

export const metadata: Metadata = {
  title: "KuchTech | Каталог продукції",
  description:
    "Каталог професійного обладнання для кафе, барів та ресторанів що постачається",
};

const Catalog = () => {
  return (
    <section className="p-5">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryList.map(({ label, src, imageURL }) => (
          <li key={label}>
            <CategoryItem label={label} src={src} imageURL={imageURL} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
