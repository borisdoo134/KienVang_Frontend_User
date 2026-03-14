import Home from "@/features/home/home";

const HomePage = async () => {
  return (
    <div className="relative ">
      <div className="flex justify-center min-h-[calc(100vh-150px)] relative top-30 overflow-x-hidden">
        <Home />
      </div>
    </div>
  );
};

export default HomePage;
