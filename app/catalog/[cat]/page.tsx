import { categoryList } from "@/lib/data";
import CategoryItem from "@/components/CategoryItem";

type Props = {
  params: { cat: string };
};

const CategoryPage = ({ params: { cat } }: Props) => {
  const index = categoryList.findIndex((item) => item.category === cat);
  const { subCategory } = categoryList[index];

  return (
    <ul className="flex flex-wrap justify-center items-center gap-5">
      {subCategory.map(({ label, src, imageURL }) => (
        <li key={label}>
          <CategoryItem label={label} src={src} imageURL={imageURL} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryPage;
