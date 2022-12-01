import {Link} from "react-router-dom"

function NotFound(){
    return (
        <div className={"page not-found"}>
            <div className={"content"}>
                <h2 className={"error-code"} data-text="ERR ~ 4O4">ERR ~ 4O4</h2>
                <p>The resource requested hasn't been found.</p>
                <Link to="/">HOME</Link>
            </div>
        </div>
    )
}

export default NotFound