import React from "react";
import '../App.css';

const Price = () => {
    return(
        <div className="PriceWrapper">
            <span className="amount">$125.00</span>
            <span className="offPrice">50%</span>
            <span className="originalPrice">$250.00</span>
        </div>
    )
}

export default Price;