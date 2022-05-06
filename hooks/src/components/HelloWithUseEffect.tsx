import React, { useEffect, useState } from "react"

export const HelloEffect = () => {
    const [userName, setName] = useState('Stranger');
    let showName = ''

    useEffect(()=>{
        document.title = `Hello, ${userName}`;
    })

    const handlerChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        showName = e.target.value;
    }

    const handlerOnClick = () =>{
        setName(showName);
    }

    return(
        <div>
            <div className="lightgray">Hook useEffect</div>
            <h2>Hello, {userName}</h2>
            <input placeholder="Enter your name" id="name" onChange={handlerChangeName}/>
            <button type="button" onClick={handlerOnClick}>Change name</button>
        </div>
    )
}