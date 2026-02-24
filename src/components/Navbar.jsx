import { FaMoon } from "react-icons/fa"
import { IoIosSearch, IoMdNotifications } from "react-icons/io"

const Navbar = () => {
  return (
    <nav className="w-screen h-17.5 flex items-center justify-around">
      <div className="w-[20%] h-full flex items-center justify-center text-3xl font-semibold text-[black]">Windmill</div>
      <div className="w-[60%] h-full flex items-center justify-center">
        <input type="search" placeholder="Search for Projects" className="w-150 h-10 relative left-7 border-2 border-[lightgrey] text-[#3f3d3d] rounded-[5px]"/>
        <IoIosSearch className="text-xl text-[#635b5b]" />
      </div>
      <div className="w-[20%] h-full flex items-center justify-center gap-10">
        <FaMoon className="text-xl text-[#7E3AF2]" />
        <IoMdNotifications className="text-3xl text-[#7E3AF2]"/>
        <img src="Virat.jpg" alt="" className="w-11.25 h-11.25 rounded-full"/>
      </div>
    </nav>
  )
}
export default Navbar
