import React, { useState} from "react";
import {DEVICES, getScreenSize} from '../util/util'

const Comp1 =() =>{
    return <div data-testid="comp1"> div 1</div>
}

const Comp2 =() =>{
    return <div data-testid="comp2" className="ab">div 2</div>
}


const ConditionalScreenBlock = () =>{
 return (
        <div>
            <p>mdskdm</p>
    {getScreenSize()===DEVICES.desktop ? <Comp1/> : <Comp2/> }

        </div>
    )
}

export default ConditionalScreenBlock;