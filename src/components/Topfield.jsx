import logo from '../images/image-product-1.jpg';
import logo1 from '../images/image-product-2.jpg';
import logo2 from '../images/image-product-3.jpg';
import logo3 from '../images/image-product-4.jpg';

import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';
import { useState } from 'react';
import '../App.css';

const Topfield = () => {
const [add, setAdd] = useState(0);
// eslint-disable-next-line no-unused-vars
const [disable, setdisable] = useState(false);
// eslint-disable-next-line no-unused-vars
const [disableSub, setdisableSub] = useState(false);
// console.log(add);
// setAdd(0)
const addition = () => {
    if(add <= 2){
        setAdd(add + 1);
        // console.log(add);
    }else {
        setdisable(true);
    }
}
const emptyButton = () => {
    console.log('empty');
}
const Subtract = () => {
    if(add >= 0){
        setAdd(add - 1);
        console.log(add);
        }else{
            
            setdisableSub(true);
            // console.log(disableSub);
        }
}
const imageList = [
    {src:logo},
    {src:logo1},
    {src:logo2},
    {src:logo3},
]

// var Src = imageList[1].src;

  return (
      <div className='cartImage'>
        <span className='backward' style={{opacity:add === 0 ? 0.3 : 1,  }} onClick={add === 0 ?  emptyButton : Subtract} >
        <img src={previous} alt='backward' />
        </span>
        <img src={`${imageList[add].src}`} alt='imagine' className='product'/>
        <span className='forward' style={{opacity:add === 3 ? 0.3 : 1 }} onClick={add === 3 ?  emptyButton : addition} >
        <img src={next} alt='forward' />
        </span>
      </div>
  );
}

export default Topfield;