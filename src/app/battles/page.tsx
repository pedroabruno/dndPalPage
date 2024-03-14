'use client'
import { ROUTES } from "@/resources/routes";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
  } from "@nextui-org/table";
import { useEffect, useState } from "react";
export default function Battles() {

    const[encounters, setEncounters] = useState<{name:string, iddifficulty:string, experience:number, status:string}[]>([])
    
    useEffect(()=>{
        fetch(ROUTES.GET_BATTLES)
        .then(data=> data.json())
        .then(json=> setEncounters(json['encounters']))
    },[])

    function EncounterLink(props : {encounterId:string}){
        return(
            <div className="px-5">
                <a href={props.encounterId}>{props.encounterId}</a>
            </div>
        )
    }

    function getChipByDifficulty(difficulty:string){
        switch(difficulty) {
            case 'TRIVIAL': 
                return <Chip color={'success'}  radius="sm" >{difficulty}</Chip>
            case 'EASY': 
                return <Chip color={'success'}  radius="sm" >{difficulty}</Chip>
            case 'MEDIUM': 
                return <Chip color={'warning'}  radius="sm">{difficulty}</Chip>
            case 'HARD': 
                return <Chip className="bg-red-500 text-black" radius="sm">{difficulty}</Chip>
            case 'DEADLY': 
                return <Chip className="bg-slate-800 text-white"  radius="sm">{difficulty}</Chip>
            default: 
                return <Chip color={'default'}  radius="sm">{difficulty}</Chip>
        }
    }

    function getChipByStatus(status:string){
        switch(status) {
            case 'Open': 
                return <Chip color={'primary'} radius="sm">{status}</Chip>
            case 'Closed': 
                return <Chip color={'default'} radius="sm">{status}</Chip>
            default: 
                return <Chip color={'default'}  radius="sm">{status}</Chip>
        }
    }

    function renderCell(key:number, name:string, difficulty:string, experience:number, status:string){
        return(
            <TableRow key={key}>
                <TableCell><EncounterLink encounterId={name}/></TableCell>
                <TableCell>{getChipByDifficulty(difficulty)}</TableCell>
                <TableCell>{experience} points</TableCell>
                <TableCell>{getChipByStatus(status)}</TableCell>
                <TableCell>actions</TableCell>
            </TableRow>
        )
    }

  return(
    <div>
        <Table aria-label="Example static collection table" className="m-7 w-auto">
            <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>DIFFICULTY</TableColumn>
            <TableColumn>EXPERIENCE</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
            </TableHeader>
            <TableBody>
                {encounters.map((encounter,key) => renderCell(key,encounter.name,encounter.iddifficulty,encounter.experience, encounter.status))}
            </TableBody>
        </Table>
        <Button color="primary" onClick={()=>{console.log('create new encounter')}}>
            Button
        </Button>
    </div>
  )
}