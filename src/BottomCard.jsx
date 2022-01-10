import React from 'react'
import "./styles/BottomCard.css" 

export default function BottomCard(props) {
    
    const { overview,state} = props;
    const Text1Dark="hsl(228, 34%, 66%)";
    const Text1Light = "hsl(228, 12%, 44%)";


    return (
        <article
            className={`bottom-card ${state ? 'hoverClassColorLight' : 'hoverClassColorDark'}`}
            style={{ backgroundColor: state ? 'hsl(225, 100%, 98%)' : 'hsl(232, 19%, 19%)' }}
        >
            <div className='overview-align'>
                <p className="bottom-card-title" style={{color: state ? Text1Light : Text1Dark}}>{overview.title}</p>
                <i className={`fab fa-${overview.social}`} style={{color: state  ? 'white' : 'black'}}></i>
            </div>
            <div className='overview-align'>
                <h1 style={{color: state ? 'black' : 'white'}}>{overview.number}</h1>
                <div className='measure' style={{color:`${overview.color}`}}>
                    <i className={`fas fa-sort-${overview.sort}`}></i>
                    <p>{overview.measure}</p>
                </div>
            </div>
        </article>
    )
}
