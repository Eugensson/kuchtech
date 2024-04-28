const productsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-[600px] flex flex-col justify-start">
      <div className="h-full flex justify-center items-center">{children}</div>
    </section>
  );
};

export default productsLayout;
