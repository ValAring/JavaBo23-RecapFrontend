
import {Link} from "react-router-dom";
export default function Navigation() {

    return (
        <section>
            <nav>
                <button><Link to={"/"}>Overview</Link></button>
                <button><Link to={"/open"}>Open</Link></button>
                <button><Link to={"/progress"}>In Progress</Link></button>
                <button><Link to={"/done"}>done</Link></button>
            </nav>
        </section>
    )
}