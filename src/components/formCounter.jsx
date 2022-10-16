import Button from './buttons';
import Counter from './counter';
import React , {useState } from 'react';

const FormCounter = ()=>{
  const [count , setCount]=useState(0);
  const [check , setCheck] = useState(false);

  const increamentCounter=()=>{
    let x = count+1;
    setCount(x);
    setCheck(false);
  }

  const decreamentCounter =()=>{
    if(count > 0){
        let x = count-1;
        setCount(x);
    }
    else {
      setCheck(true);
    }
  }


    return (<>    
    <div className="buttons">
        <Button st='btnI' operation={increamentCounter} text = '+' />
        <Counter count={count}/>
        <Button st='btnD' operation = {decreamentCounter} text = '-'/>
    </div>

    {
      check ?
      <div className='notZero'>can't decrease counter is zero</div>
      :
      ''
    }
    </>)
}

export default FormCounter;