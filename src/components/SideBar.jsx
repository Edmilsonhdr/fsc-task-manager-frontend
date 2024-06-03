import { useNavigate } from "react-router-dom";
import CustomButton from './CustomButton';
import {FaRocket} from 'react-icons/fa';
import './SideBar.scss'

function SideBar() {
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        navigate("/login");
    }
    return (  
        <div className="sidebar-container">
            <div className="logo">
                {/* <img src="" alt="" /> */}
                <FaRocket size={100}/>
            </div>
            <div className="sign-out"><CustomButton onClick={handleSignOutClick}>Sair</CustomButton></div>
        </div>
    );
}

export default SideBar;