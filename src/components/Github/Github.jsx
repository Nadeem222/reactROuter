import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export function Github() {
    const [data , setData] = useState();

    useEffect(()=>{
        fetch('https://api.github.com/users/nadeem222')
        .then((res) => res.json())
        .then((res)=> console.log(res))
        setData(data)
    })


    return (
        <>
            <div>
                <h1>{data.followers}</h1>
            </div>
        </>
    )
}
