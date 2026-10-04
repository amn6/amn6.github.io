import { Link } from "react-scroll";

const TopButton = () => {
    return (
        <Link className="toTop" smooth spy to="home"><img src={"up.png"} alt="Back to top"/></Link>
    );
}

export default TopButton;
