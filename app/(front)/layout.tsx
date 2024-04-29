const FrontLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto p-1 flex flex-grow items-center justify-center">
      {children}
    </main>
  );
};

export default FrontLayout;
