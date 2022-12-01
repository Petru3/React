

function Cell(props){

    return(
        <div className="link">
            <a href={props.link} rel="noreferrer" target="_blank" >{props.title}</a>
        </div>
    )   
}

export default Cell