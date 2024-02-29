'use client'
import MonsterCard from "@/components/monsterCard";
import { useEffect, useState } from "react";
import { API_URL } from "@/resources/routes";

export default function Page() {
    const [monsterList, setMonsterList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(()=>{
        fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(json => setMonsterList(json.monsters))
    },[])
    
    return (
        <div>
            {monsterList.map(m=> <MonsterCard name={m.name}/>)}
        </div>
    );
}
