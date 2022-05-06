import React, { ChangeEvent, useContext } from "react";
import { HelloCtx } from '../App'

export function HelloWithContext() {
    const Context = useContext(HelloCtx);

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => { Context.name = e.target.value }
    const handlerClick = () => {
        Context.setFunc(Context.name);
    }

    return (
        <div>
            <div className="lightgray">Hook useContext</div>
            <h2>Hello, {Context.name}</h2>
            <input placeholder="Enter neame" onChange={handleChangeName} />
            <button type="button" onClick={handlerClick}>Edit</button>
        </div>
    )
}