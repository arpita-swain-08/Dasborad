import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

const Layout = () => {
  return (
    <div className="flex bg-[#f4f6f8]">

      {/* LEFT SIDEBAR */}
      <div className="w-[260px] fixed left-0 top-0 h-screen bg-white border-r">
        <Sidebar />
      </div>

      {/* RIGHT AREA */}
      <div className="flex-1 ml-[260px] flex flex-col">

        {/* TOP NAVBAR */}
        <div className="bg-white border-b sticky top-0 z-10">
          <Navbar />
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">
          <Hero />
        </div>

      </div>
    </div>
  );
};

export default Layout;