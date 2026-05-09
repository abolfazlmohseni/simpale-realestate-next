import React, { useEffect, useState } from 'react'
import db from "../../data/db.json"
import HomeCard from '@/Components/Module/HomeCard'
import style from "../../styles/homes.module.css"
export default function index() {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("-1")
    const [homes, setHomes] = useState(db.homes)

    useEffect(() => {
        const newHomes = db.homes.filter((home) => home.title.includes(search))
        setHomes(newHomes)
    }, [search])

    useEffect(() => {
        switch (filter) {
            case "price": {
                const newHomes = [...homes].sort((a, b) => a.price - b.price)
                setHomes(newHomes)
                break;
            }

            case "room": {
                const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount)
                setHomes(newHomes)
                break;
            }

            case "scale": {
                const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage)
                setHomes(newHomes)
                break;
            }
            default:
                break;
        }
    }, [filter])

    const pageHandler = (pageNumber, event) => {
        event.preventDefault()
        const enditem = pageNumber * 3
        const startitem = enditem - 3
        const newHomes = db.homes.slice(startitem, enditem)
        setHomes(newHomes)

    }



    return (
        <div className={style["home-section"]} id={style["houses"]}>
            <div className={style["home-filter-search"]}>
                <div className={style["home-filter"]}>
                    <select defaultValue={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="-1" selected>انتخاب کنید</option>
                        <option value="price">بر اساس قیمت</option>
                        <option value="room">بر اساس تعداد اتاق</option>
                        <option value="scale">بر اساس اندازه</option>
                    </select>
                </div>
                <div className={style["home-search"]}>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="جستجو کنید" />
                </div>
            </div>
            <div className={style["homes"]}>
                {homes.slice(0, 3).map(home => <HomeCard key={home.id} {...home} />)}
            </div>
            <ul className={style["pagination__list"]}>
                {
                    Array.from({ length: Math.ceil(db.homes.length / 3) }).map((item, index) => {
                        return (
                            <li onClick={() => pageHandler(index + 1, event)} key={index + 1} className={style["pagination__item"]}><a href="#" className="">{index + 1}</a></li>
                        )
                    })
                }
                {/* <li className={style["pagination__item"]}><a href="#" className="">2</a></li>
                <li className={`${style["pagination__item"]} ${style["active"]}`}>
                    <a href="#">1</a>
                </li> */}
            </ul>
        </div>
    )
}
