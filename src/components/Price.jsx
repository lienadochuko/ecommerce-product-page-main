import React from "react";
import '../App.css';

const Price = () => {
    return (
        <div className="PriceWrapper">
            <div className="priceContainer">
                <span className="amount">$125.00</span>
                <span className="offPrice">50%</span>
            </div>
            <span className="originalPrice">$250.00</span>
        </div>
    )
}

export default Price;