import Cell from '../../shared/Cell'

function EnglishPage(){

    const dataCell = [
        {
            id:1,
            link: 'https://drive.google.com/file/d/1LW-hxK_m2KULbuvfhwVP26vIUNJv3Ep1/view?usp=share_link',
            title: "La restaurant"
        },
        {
            id:2,
            link: 'https://drive.google.com/file/d/1LWAGxDCHt6StPGFX-0HP9nONo9TnmgzX/view?usp=share_link',
            title: "Calculatoare si internet"
        },
        {
            id:3,
            link: 'https://drive.google.com/file/d/1L_6P5oVo4BiO2lW7TGGlaFHLnJgIfrrD/view?usp=share_link',
            title: "Descrierea oamenilor"
        },
        {
            id:4,
            link: 'https://drive.google.com/file/d/1LlOLu_SJCNGAhVGjc0FZr9VI_ypPF2Mx/view?usp=share_link',
            title: "Educatie"
        },
        {
            id:5,
            link: 'https://drive.google.com/file/d/1Lq42EqlpR2XdP8JnFEQ8w6BDctlOmXBo/view?usp=share_link',
            title: "Sanatate"
        },
        {
            id:6,
            link: 'https://drive.google.com/file/d/1LtUgbCPQxN-6QJN_Bc4cqLm2bM6O122W/view?usp=share_link',
            title: "Mancare si evenimente"
        },
        {
            id:7,
            link: 'https://drive.google.com/file/d/1LwXr-mEU5T_fLE3DicKFeV97vljr0yqC/view?usp=share_link',
            title: 'Menu Guide'
        },
        {
            id:8,
            link: 'https://drive.google.com/file/d/1M2OArlDOZ5xm_OK8CaCFEy521DIazn7J/view?usp=share_link',
            title: 'Prin Oras'
        },
        {
            id:9,
            link: 'https://drive.google.com/file/d/1M8lT7xQQOd7L-9eKwf2LSR3I3ECa9pm7/view?usp=share_link',
            title: 'Shopping'
        },
        {
            id:10,
            link: 'https://drive.google.com/file/d/1M9cu82P_mBASORVpQjLwXAts2hiDIAqN/view?usp=share_link',
            title: 'Telefon si informatica'
        },
        {
            id:11,
            link: 'https://drive.google.com/file/d/1M9lb7HpweGU54pbvSpkXB7F1isNeMf33/view?usp=share_link',
            title: 'Calatorie'
        },
        {
            id: 12,
            link: 'https://drive.google.com/file/d/1Q5AvpYDFfP-qYha4e6mDs2nDKzy_cF1v/view?usp=share_link',
            title: "Cooking Verbs"
        }
    ]

    const loopCells = dataCell.map(item => {
        return(
            <Cell 
            id={item.id}
            {...item}
            />
        )
    })


    return(
        <div className="page course-page">
            <div className="img-up">
                <img src={require('../../assets/background-english.png')} alt="upcover" />
            </div>
            <div className="course-text">
                <h1 className="text">Vocabular de Engleza</h1>
                <div className="svgArrow">
                    <svg id='svg-arrow-figma' viewBox="0 0 960 275" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 83C24.1667 37 100.4 -36.1 224 39.5C378.5 134 587 71.5 478 18C369 -35.5 354 54 376 102.5C398 151 446.5 196.5 536 201.5C625.5 206.5 818.5 20.5 915.5 124.5C1012.5 228.5 920.5 240 872 274M872 274H915.5M872 274V242.5" stroke="white" stroke-width="4"/>
                    </svg> 
                </div>
            </div>
            
            <div className="cells">
            {loopCells}
            </div>
            <div className="img-right">
                <img src={require("../../assets/photo-grid-course-2.png")} alt="imggrid"/>
            </div>
        </div>
    )
}

export default EnglishPage