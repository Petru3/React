import React from 'react'

import Cell from '../../shared/Cell'

function SpanishPage(){

    const dataCell = [
        {
            id:1,
            link: 'https://drive.google.com/file/d/1IVj3kvT6yfxk_PAUb0-kCDe8MQqDqmhA/view?usp=share_link',
            title: "Activitati zilnice si timp"
        },
        {
            id:2,
            link: 'https://drive.google.com/file/d/1pI0R5luiu5ro4M3hUBTMkjSaPMz5gG5R/view?usp=share_link',
            title: "Alimente si bauturi"
        },
        {
            id:3,
            link: 'https://drive.google.com/file/d/1nTedufvV8Ki_yFxsRzKCrP5rbg_SXaBo/view?usp=share_link',
            title: "Caracteristici ale persoanelor"
        },
        {
            id:4,
            link: 'https://drive.google.com/file/d/1LYeny93oh1bYCxuLvP_UVk18n6FyK6HY/view?usp=share_link',
            title: "Casa-obiecte"
        },
        {
            id:5,
            link: 'https://drive.google.com/file/d/1_iAsTHKtFe1ajMyR_D8phqdhoCfgwK_X/view?usp=share_link',
            title: "Corpul Omenesc"
        },
        {
            id:6,
            link: 'https://drive.google.com/file/d/1lgA2iyju1TWeDLjWv1BXlRuTmMbUyQYm/view?usp=share_link',
            title: "Culori si vestimentatie"
        },
                {
            id:7,
            link: 'https://drive.google.com/file/d/1KSkWPtBolOAtCNVJv-oFTH19my0ysfMi/view?usp=share_link',
            title: "Mijloace de transport"
        },
        {
            id:8,
            link: 'https://drive.google.com/file/d/1vRG6M1z9lSrNdyh1gPCYxhoGC15VOCCh/view?usp=share_link',
            title: "Numere"
        },
        {
            id:9,
            link: 'https://drive.google.com/file/d/1otwn2KbXT0BTMJ45jME9o-D6cyagcRw-/view?usp=share_link',
            title: "Punctele Cardinale si Relief"
        },
        {
            id:10,
            link: 'https://drive.google.com/file/d/1CjkbuwSDk4jHG5-w6R7MhXX1j1el7Rb9/view?usp=share_link',
            title: "Saluturi,profesii si Familie"
        },
        {
            id:11,
            link: 'https://drive.google.com/file/d/1i6UQfon9Xq_TRBhhD7X8wO2uryOk6USi/view?usp=share_link',
            title: "Cele mai folosite Verbe"
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
                <img src={require('../../assets/background-spanish.png')} alt="upcover" />
            </div>
            <div className="course-text">
                <h1 className="text">Vocabular de Spaniola</h1>
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
                <img src={require("../../assets/photo-grid-course-1.png")} alt="imggrid"/>
            </div>
        </div>
    )
}

export default SpanishPage