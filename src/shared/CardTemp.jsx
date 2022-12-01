import { Link } from "react-router-dom";

function CardCourse({path, title, image}){
    return(
        <>
            <Link to={path}>
                <h2>{title} &#8594;</h2>
                <img src={image} alt="" />
            </Link>
        </>
    )
}

export default CardCourse