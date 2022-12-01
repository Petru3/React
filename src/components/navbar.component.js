import {Link} from 'react-router-dom'

function Navbar() {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("nav").style["boxShadow"] = "0 0 50px #999999";
        document.querySelector("nav").style.background = "#eee";
        document.getElementById("hImg").style.width = "75%";
        document.getElementById("hImg").style.padding = "4% 0% 0% 5em";
        document.getElementById(".nav-list-right").style.margin = "0%";
        document.querySelector("nav").style.height = "4em";
      } else {
        document.querySelector("nav").style["boxShadow"] = "none";
        document.querySelector("nav").style.background = "#eee";
        document.getElementById(".nav-list-right").style.margin = ".5%";
        document.querySelector("nav").style.height = "5em";
        document.getElementById("hImg").style.padding = "5% 0% 0% 5em";
      }
    }

    const logout = () => {
        if (localStorage.token) {
            localStorage.removeItem("token")
            document.location.href = "/"
        }
    }

    return (
        <nav>
            <ul className={"nav-list-left"}>
                <Link to="/">
                    <img id="hImg" src={require("../assets/LeftImglogo.png")} alt={"erasmus & cvl"}/>
                </Link>
            </ul>
            <ul className={"nav-list-right"}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/jurnal-erasmus">Jurnal Erasmus+</Link></li>
                <li><Link to="/courses">Vocabulare</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                {!localStorage.token ? (
                    <li><Link to="/login">Login</Link></li>
                ) : (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <button onClick={logout} className={"button button-logout"}>Logout</button>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar