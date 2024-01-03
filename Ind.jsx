import React from "react";
import {add,sub,mul,div} from "./Calcus";

function Ind(){
    return (
        <>
        <ul>
            <li>sum of two number is {add(40,3)}</li>
            <li>subtraction of two number is {sub(40,3)}</li>
            <li>multiplication of two number is {mul(40,3)}</li>
            <li>division of two number is {div(40,3)}</li>
        </ul>
        </>
    );
}

export default Ind;