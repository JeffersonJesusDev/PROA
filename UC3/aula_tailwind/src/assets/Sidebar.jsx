import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import SidebarIcon from "./SideBarIcon";

function Sidebar() {

    return(
        <div className="fixed top-0 flex flex-col h-screen bg-gray-700 text-white">
            <SidebarIcon icone = {<BsGearFill size={28} /> } />
            <SidebarIcon icone = {<BsGearFill size={28} /> } />
            <SidebarIcon icone = {<BsGearFill size={28} /> } />
            <SidebarIcon icone = {<BsGearFill size={28} /> } />
        </div>
    )
}

export default Sidebar;