import Navbar from "@/components/parts/Navbar";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      {children}
    </main>
  );
};

export default AppWrapper;
