import React from 'react'
import db from "../../data/db.json"
import HomeCard from '../Module/HomeCard'
function Homes() {


    return (
        <div className="homes">
            {db.homes.map(home => <HomeCard key={home.id} {...home} />)}
        </div>
    )
}

export default Homes