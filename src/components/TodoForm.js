import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { todoContext } from "../context/Context";
import { ADD } from "../context/action.type";

export default function TodoForm() {
    const { dispatch } = useContext(todoContext);

    const [val, setVal] = useState("");
    function sendVal(e) {
        e.preventDefault();
        if (val === "") return alert("Enter some value");
        dispatch({
            type: ADD,
            payload: {
                id: v4(),
                value: val
            }
        })

        setVal("");
    }
    return (
        <form onSubmit={sendVal}>
            <div className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Put Your Text Here" value={val} onChange={e => {
                    setVal(e.target.value)
                }} />
                <button className="btn btn-success" type="submit" id="button-addon2">ADD</button>
            </div>
        </form>
    )
}