import Products from "@/app/admin/products/Products";

export const metadata = {
  title: "БД товарів",
  robots: { index: false, follow: true },
};
export default function AdminProductsPage() {
  return (
    <section className="h-[500px] flex items-center justify-center">
      <Products />
    </section>
  );
}
