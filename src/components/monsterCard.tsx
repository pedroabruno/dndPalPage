import React, { useState, useEffect } from 'react';

export default function MonsterCard(props : {name:string}) {
    return (
        <div>{props.name}</div>
    );
}