import React from 'react'
import "./styles/BottomCard.css" 
import BottomCard from './BottomCard'

export default function BottomCards(props) {
    
    const { overviews,state } = props;
    const Text1Dark="hsl(228, 34%, 66%)";
    const Text1Light = "hsl(228, 12%, 44%)";

    return (
        <section className='bottom-cards'>
            <h1 className='bottom-cards-title' style={{color: state ? 'black' : 'white' }}> Overview - Today</h1>
            <div className='all-bottom-cards'>
                {overviews.map(overview => {
                    return <BottomCard key={overview.id} overview={overview} state={state}/>
                })}
            </div>
        </section>
    )
}
