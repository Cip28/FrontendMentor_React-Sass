import React from 'react'
import './styles/Card.css'

export default function TopCard(props) {
    const { profile,state } = props;
    const Text1Dark="hsl(228, 34%, 66%)";
    const Text1Light = "hsl(228, 12%, 44%)";

   
    return (
        <article
            className={`card ${state ? 'hoverClassColorLight' : 'hoverClassColorDark'}`}
            style={{ backgroundColor: state ? 'hsl(225, 100%, 98%)' : 'hsl(232, 19%, 19%)' }}
        >               
            <div
                className='border-top'
                style={{ background: `${profile.border}` }}>
            </div>
                            <div className='social-infos'>
                                <i className={`fab fa-${profile.social}`} style={{color: state  ? 'white' : 'black'}}></i>
                                <p style={{color: state ? Text1Light : Text1Dark}}>{profile.name}</p>
                            </div>
                            <h1 style={{color: state ? 'black' : 'white'}}>{ profile.number}</h1>
                            <p className='followers' style={{color: state ? Text1Light : Text1Dark}}>{profile.text}</p>
                            <div className='today' style={{color:`${profile.color}`}}>
                                <i className={`fas fa-sort-${profile.sort}`}></i>
                                <p>{profile.measure}</p>
                            </div>
        </article>
    )
}
