import React from "react";
import '../App.css';
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

const Productamount = () => {
    const [ProductTotal, setProductTotal] = useState(0);
    const [setter, setSetter] = useState(true);
    useEffect(() => {
        localStorage.setItem('ProductTotal', JSON.stringify(ProductTotal));
        setSetter(true);
      }, [setter]);
    // eslint-disable-next-line no-unused-vars
    const [disable, setdisable] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [disableSub, setdisableSub] = useState(false);

    const addition = () => {
        if(ProductTotal <= 20){
            setProductTotal(ProductTotal + 1);
        }else {
            setdisable(true);
        }
    }

    const Subtract = () => {
        if(ProductTotal >= 0){
            setProductTotal(ProductTotal - 1);
            console.log(ProductTotal);
            }else{                
                setdisableSub(true);
            }
    }
    
    return(
            <div className="ProductWrapper">
            <span className="ProductSubtract" onClick={Subtract}>-</span>
            <span className="ProductTotal">{ProductTotal}</span>
            <span className="ProductAddition" onClick={addition}>+</span>
            </div>
    )
}

export default Productamount;