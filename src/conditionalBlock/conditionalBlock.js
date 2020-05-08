import React, { useState} from "react";
import Dummy from "./Dummy"
const ConditionalBlock = () =>{
    const [showPara, setParaDisplayState] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
const onBtnClickToToggle=()=>{
    setParaDisplayState(showPara => !showPara)
    setShowComponent(showComponent => !showComponent)
}
 return (
        <div>
            
       {showPara && <p data-testid="showPara">kmsdkds kfdlkfdl dfklfkdl</p>}
       {!showComponent && <Dummy data-testid="dummyCom" />}
      
     
        <button data-testid="show-btn" onClick={onBtnClickToToggle}>Show Para</button>

        </div>
    )
}

export default ConditionalBlock;