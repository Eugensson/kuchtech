import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  label: string;
  src: string;
  imageURL: string;
}

const CategoryItem = ({ label, src, imageURL }: CategoryItemProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-[250px]">
      <Link href={src}>
        <Image
          priority
          src={imageURL}
          width={450}
          height={450}
          alt="Світлина продукту"
          className="h-auto w-full object-cover"
        />
        <div className="bg-white p-4 border-t-2">
          <h3 className="mt-0.5 text-sm text-zinc-700 font-semibold">
            {label}
          </h3>
        </div>
      </Link>
    </article>
  );
};

export default CategoryItem;
