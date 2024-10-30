import useStore from "./store/store"
import { useState } from "react"
function Calculator(){
  const[display,setdiplay]=useState(false)

  const {Histories,setHistories,Histories1,setHistories1,deleteHistory,clearHistories,deleteHistory1,result,setresult}=useStore()
const handleoutput=value=>{
    setHistories(value)
    setHistories1(value)
    
  }
  const handledisplay=()=>{
    setdiplay(!display)
  }
  const handledelete=()=>{
   deleteHistory()
   deleteHistory1()
   


  }
 
 
  const handleresult=value=>{ 
    setHistories(value)
    setHistories1(value)
    let resultValue = "";
    for(let i=0;i<Histories.length;i++){
  if(Histories[i]=="%" || Histories[i]=="÷" || Histories[i]=="x" || Histories[i]=="+" || Histories[i]=="-"){
        let num1array=Histories.slice(0, i);
        let num2array=Histories.slice(i+1);
        console.log(num1array)
        console.log(num2array)
        let num1 = parseFloat(num1array.join(''));
        let num2 = parseFloat(num2array.join(''));
        console.log(num1);
        console.log(num2)
       
        console.log(num1)
           console.log(num2)
        if(Histories[i]=="%"){
          resultValue=num1%num2
      
        }
        if(Histories[i]=="÷"){
        resultValue=num1/num2;
        }
       if(Histories[i]=="x"){
          resultValue=num1*num2;
        }
        if(Histories[i]=="+"){
    
        resultValue=num1+num2;

        }
      if(Histories[i]=="-"){
          resultValue=num1-num2;

        }
        break;
      }
     
    }
    setresult(resultValue);
    setHistories(resultValue);
    setHistories1(resultValue);
    
    
  }
 
return (<>
<div className="all">

  <img src="/history.png" alt="history" className="history" onClick={handledisplay}></img>

<h4 className="display">
  
  {Histories.map((history,index)=>{return history})} 
</h4>
<div className="buttons"> 
  <div className="top">
  <button className="clear" onClick={clearHistories} >C</button>
  <button className="remainder"onClick={()=>handleoutput("%")}>%</button>
 <button onClick={handledelete}> <img src="/delete.png" className="delete"></img></button>
  <button className="division" onClick={()=>handleoutput("÷")}>÷</button>
  </div>
  <div className="flex">
  <div className="middle">
  <button onClick={()=>handleoutput(7)}>7</button>
  <button onClick={()=>handleoutput(8)}>8</button>
  <button onClick={()=>handleoutput(9)}>9</button>
  <button onClick={()=>handleoutput(4)}>4</button>
  <button onClick={()=>handleoutput(5)}>5</button>
  <button onClick={()=>handleoutput(6)}>6</button>
  <button onClick={()=>handleoutput(1)}>1</button>
  <button onClick={()=>handleoutput(2)}>2</button>
  <button onClick={()=>handleoutput(3)}>3</button>
  <button  className="showall"
  >All</button>
  <button onClick={()=>handleoutput(0)}>0</button>
  <button onClick={()=>handleoutput(".")} >.</button></div>
  <div className="bottom">
    <button onClick={()=>handleoutput("x")}>x</button>
    <button onClick={()=>handleoutput("+")}>+</button>
    <button onClick={()=>handleoutput("-")}>-</button>
    <button className="equal" onClick={()=>handleresult("=")}>=</button>
    </div>
</div>
</div>
</div>
{display && <div className="history1">{Histories1.map((history1,index)=>{return history1})} </div>}
</>

)


}

export default Calculator