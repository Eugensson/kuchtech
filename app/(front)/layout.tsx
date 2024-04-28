const FrontLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto px-4 flex flex-grow items-center justify-center">
      {children}
    </main>
  );
};

export default FrontLayout;
