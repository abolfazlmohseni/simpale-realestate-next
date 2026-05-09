import { useRouter } from 'next/router'
import React from 'react'
import HomeDetails from '@/Components/Template/HomeDetails'
import db from "../../data/db.json"
function SingleHome() {
    const route = useRouter()
    const { id: homeId } = route.query
    console.log(homeId);

    const home = db.homes.find(({ id }) => id === Number(homeId))
    console.log(home);

    return (
        <HomeDetails {...home} />
    )
}

export default SingleHome