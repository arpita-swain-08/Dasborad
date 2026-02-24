import { HiCash } from "react-icons/hi";
import { MdOutlineShoppingCart, MdOutlineStar, MdPeopleAlt } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";

const Hero = () => {

  const statsData = [
    { 
      icon: MdPeopleAlt, 
      title: "Total clients", 
      value: "6389", 
      bgColor: "bg-[#FEECDC] text-[#FF571B]" 
    },
    { 
      icon: HiCash, 
      title: "Account balance", 
      value: "$ 46,760.89", 
      bgColor: "bg-[#DDF7EC] text-[#27A77C]" 
    },
    { 
      icon: MdOutlineShoppingCart, 
      title: "New sales", 
      value: "376", 
      bgColor: "bg-[#E0EFFE] text-[#3D82F8]" 
    },
    { 
      icon: RiMessage2Line, 
      title: "Pending contacts", 
      value: "35", 
      bgColor: "bg-[#D5F5F6] text-[#0292A0]" 
    }
  ]

    const tableData = [
    {
      avatar: "A.jpg",
      name: "Chandler Jacobi",
      role: "Direct Security Executive",
      amount: "$ 989.4",
      status: "primary",
      statusText: "Primary",
      statusClass: "bg-purple-100 text-purple-600",
      date: "2/3/2020",
    },
    {
      avatar: "B.jpg",
      name: "Monserrat Marquardt",
      role: "Forward Accountability Producer",
      amount: "$ 471.44",
      status: "danger", 
      statusText: "Danger",
      statusClass: "bg-red-100 text-red-500",
      date: "11/29/2019",
    },
    {
      avatar: "F.jpg",
      name: "Lonnie Wyman",
      role: "Legacy Program Director",
      amount: "$ 934.24",
      status: "success",
      statusText: "Success", 
      statusClass: "bg-green-100 text-green-600",
      date: "4/3/2020",
    },
    {
      avatar: "E.jpg",
      name: "Corine Abernathy",
      role: "Chief Factors Planner",
      amount: "$ 351.28",
      status: "warning",
      statusText: "Warning",
      statusClass: "bg-orange-100 text-orange-500",
      date: "6/21/2019",
    }
  ]  
  
  return (
    <div className="w-[80%] p-8 absolute top-27.5 left-[19.5%]">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Dashboard</h1>

      <div className="w-full rounded-xl bg-[#7E3AF2] text-white px-6 py-4 flex items-center justify-between shadow-md mb-8">
        <p className="font-medium flex items-center gap-2"><MdOutlineStar /> Star this project on GitHub</p>
        <button className="text-sm font-medium hover:-translate-y-0.5 cursor-pointer transition-all">View more</button>
      </div>

      <div className="flex items-center justify-around mb-10 px-6">
        {statsData.map((item, index) => (
          <div key={index} className="flex-1 max-w-62.5 rounded-xl shadow-md p-6 hover:shadow-2xl transition-all cursor-pointer hover:scale-105">
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-xl ${item.bgColor}`}>
                <item.icon className="text-2xl"/>
              </div>
              <div className="ml-5">
                <span className="text-2xl font-bold text-gray-700">{item.value}</span>
              </div>
            </div>
            <p className="text-lg text-gray-500 font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    
      <div className="rounded-xl shadow-lg border-2 border-gray-200">
        <div className="flex items-center gap-59.5 px-6 py-4 text-xs font-semibold text-gray-400 border-b border-gray-200">
          <span>CLIENT</span>
          <span>AMOUNT</span>
          <span>STATUS</span>
          <span>DATE</span>
        </div>
        
        {tableData.map((row, index) => (
          <div key={index} className="grid grid-cols-4 items-center px-6 py-4 hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center space-x-3">
              <img src={row.avatar} alt={row.name} className="w-10 h-10 rounded-full"/>
              <div> 
                <p className="text-sm font-medium text-gray-700">{row.name}</p>
                <p className="text-xs text-gray-400">{row.role}</p>
              </div>
            </div>
            
            <p className="text-sm font-medium text-gray-700">{row.amount}</p>
            <span className={`text-xs px-3 py-1 rounded-full w-fit ${row.statusClass}`}>{row.statusText}</span>
            <p className="text-sm text-gray-500">{row.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero