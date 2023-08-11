// import { render } from "@testing-library/react";
import React from "react";
import '../App.css';

const BodyDetails = () => {
    return(
        <div className="bodyWrapper">
            <p className="company">SNEAKER COMPANY</p>
            <p className="edition">Fall Limited Edition Sneakers</p>
            <p className="info">These low-profile sneakers 
             are your perfect casual wear companion.
             Featuring a durable rubber outer sole,
              they’ll withstand everything the weather can offer</p>
        </div>
    )
}

export default BodyDetails;