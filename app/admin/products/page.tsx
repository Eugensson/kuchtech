import Products from "@/app/admin/products/Products";

export const metadata = {
  title: "БД товарів",
};
const AdminProductsPage = () => {
  return (
    <section className="h-[500px] flex items-center justify-center">
      <Products />
    </section>
  );
};

export default AdminProductsPage;
