import logo from "./logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
export default function Navbar(){
    
    return <>
    <div className="bg-[#fde4ab] font-[] flex items-center">
        <span id="logo" className="w-10 h-10 p-1"><img src={logo} alt="" /></span>
        <span id="heading" className="w-80 text-3xl font-bold grow text-center p-1">HIND DI CHADAR</span>
        <span id="account" className="w-10 text-[#000000]"> <FontAwesomeIcon icon={faUser} /></span>
    </div>
    </>
}