import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {GetErasmusJournals} from "../../utils/api/api.journals";

function ErasmusJournalPage(){

    const [articles, SetArticles] = useState([])

    useEffect(() => {
        GetErasmusJournals().then((response) => {
            if(Array.isArray(response.data))
                SetArticles(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <div className={"page erasmus-journals"}>
            <div>
                <h1>Jurnal Erasmus</h1>
                <div className={"articles"}>
                    { articles.length < 0 ? (
                        articles.map((article, key) => {
                            return(
                                <div className={"article"} key={key}>
                                    <div className={"article-content"}>
                                        <h4>{article.title}</h4>
                                        <Link to={`/jurnal-erasmus/${article.ID}`}>Citeste</Link>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <h6 className={"no-items"}>it's empty in here...</h6>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ErasmusJournalPage