import { Link } from "react-scroll";

const TopButton = () => {
    return (
        <Link className="toTop" smooth spy to="nav"><img src={"up.png"} alt="UP"/></Link>
    );
}

export default TopButton;