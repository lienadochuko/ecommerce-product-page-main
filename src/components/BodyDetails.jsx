// import { render } from "@testing-library/react";
import React from "react";
import '../App.css';

const BodyDetails = () => {
    return(
        <div className="bodyWrapper">
            <span className="company">SNEAKER COMPANY</span>
            <span className="edition">Fall Limited Edition Sneakers</span>
            <span className="info">These low-profile sneakers 
             are your perfect casual wear companion.
             Featuring a durable rubber outer sole,
              they’ll withstand everything the weather can offer.</span>
        </div>
    )
}

export default BodyDetails;