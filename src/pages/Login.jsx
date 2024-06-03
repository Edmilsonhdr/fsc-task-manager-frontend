import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import {FaRocket} from 'react-icons/fa';
import "./Login.scss";

function Login() {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/");
    }

    return ( 
        <div className="login-container">
            <FaRocket size={100}/>
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
            </div>
        </div> 
    );
}

export default Login;