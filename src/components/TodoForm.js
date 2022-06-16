import React from "react";
// import { v5 } from "uuid";

export default function TodoForm() {

    return (
        <div className="input-group mt-3">
            <input type="text" className="form-control" placeholder="Put Your Text Here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <button className="btn btn-success" type="button" id="button-addon2">ADD</button>
        </div>
    )
}