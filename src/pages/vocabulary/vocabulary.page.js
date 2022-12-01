 
import CardTemp from '../../shared/CardTemp'
import SpanishImage from '../../assets/spanish.jpg'
import EnglishImage from '../../assets/english.jpg'

function VocabulariesPage() {

    const data = [
        {
            path: "/courses/spanish",
            title: "Vocabular Spaniola",
            image: SpanishImage
        },
        {
            path: "/courses/english",
            title: "Vocabular Engleza",
            image: EnglishImage
        }
    ]
    const loopOverCourses = data.map(item => {
        return(
            <CardTemp
            path={item.path}
            title={item.title}
            image={item.image}
            />
        )
    })

    return (
        <div className="page vocabularies-page">
            <div className='courses'>
                {loopOverCourses}
            </div>
        </div>
    )
}

export default VocabulariesPage