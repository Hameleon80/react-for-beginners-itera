import { ChangeEvent, useState } from "react"

export const Hello = () => {
    const [name, setName] = useState('Stranger');

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) =>{setName(e.target.value)};

    return (
        <div>
            <div className="lightgray">Hook useState</div>
            <h2>Hello, {name}</h2>
            <input placeholder="Enter name" onChange={handleChangeName}/>
        </div>
    )
}
