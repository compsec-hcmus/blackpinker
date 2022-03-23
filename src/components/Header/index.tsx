import { Link } from "react-router-dom";

import avata from "../../images/avata.png";

import style from "./header.module.scss";

const Header = () => {
    return (
        <div className="d-flex">
            <Link to="/" className={`flex-1 ${style.link}`}>Home</Link>
            <Link to="/about" className={`flex-1 ${style.link}`}>About</Link>

            <div id={style.avata}>
                <img src={avata} alt="" />
            </div>
        </div>
    )
}

export default Header;