'use client'
import MonsterCard from "@/components/monsterCard";
import { useEffect, useState } from "react";
import { API_URL } from "@/resources/routes";
import { Monster } from "@/types/monsterType";

export default function Page() {
    const [monsterList, setMonsterList] = useState<Monster[]>([])
    const [currentPage, setCurrentPage] = useState<number>(0)

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
