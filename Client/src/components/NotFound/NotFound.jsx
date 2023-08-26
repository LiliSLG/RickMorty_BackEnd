import { Link } from "react-router-dom";
import styles from "./NotFound.module.css"

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/home'>Home</Link>
            {/* <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link> */}
        </div>
    )
}

