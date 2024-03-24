import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Applied from "../Applied/Applied";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
                {/* <Applied></Applied> */}
            </Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;