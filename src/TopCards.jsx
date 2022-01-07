import React from 'react'
import TopCard from './TopCard'

export default function TopCards(props) {
    const { profiles,state } = props;
    // console.log(profiles)

    return (
        <section className='cards-wrapper '>
            {profiles.map(profile => {
                return (
                    <TopCard key={profile.id} profile={profile} state={state}/>
                )
            })}
        </section>
    )
}
