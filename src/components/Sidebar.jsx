import { MdDashboard, MdDescription, MdCreditCard, MdBarChart, MdStar, MdWindow, MdTableView, MdPages } from 'react-icons/md'

const Sidebar = () => {
  const sidebarItems = [
    { icon: MdDashboard, label: 'Dashboard' },
    { icon: MdDescription, label: 'Forms' },
    { icon: MdCreditCard, label: 'Cards' },
    { icon: MdBarChart, label: 'Charts' },
    { icon: MdStar, label: 'Buttons' },
    { icon: MdWindow, label: 'Modals' },
    { icon: MdTableView, label: 'Tables' },
    { icon: MdPages, label: 'Pages' }
  ]

  return (
    <div className="w-64 h-screen flex flex-col py-6">
        {sidebarItems.map((item, index) => (
          <div key={index} className="flex items-center px-6 py-3 text-[#454141] text-[17px] font-medium cursor-pointer hover:bg-gray-200 hover:rounded-xl hover:text-[black] transition-all relative left-5">
            <item.icon className="mr-4 text-2xl">{item.icon}</item.icon>
            <h1>{item.label}</h1>
          </div>
        ))}
      <div className="mx-6 my-10">
        <button className="w-[90%] px-5 py-3 bg-[#7E3AF2] text-white rounded-lg text-m cursor-pointer font-semibold hover:-translate-y-0.5 transition-all shadow-lg hover:shadow-xl flex items-center">
          Create account
          <span className="ml-3 mb-1 text-xl">+</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
