import SideBar from '../components/SideBar';
import Tasks from '../components/Tasks';
import "./Home.scss";
function Home() {
    return ( <div className="home-container"><SideBar/>
    <Tasks /></div> );
}

export default Home;