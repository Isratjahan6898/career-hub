import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1>Oppss!!!!</h1>
            <Link to="/"><button>go to home</button></Link>
            
        </div>
    );
};

export default Error;