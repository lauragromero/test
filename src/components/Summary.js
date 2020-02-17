import React from 'react'

const Summary=(props)=>{
    const{shirt, mug, cap}= props.cartQuantity;
    const quiantities = props.cartQuantity;
    const sumTotal= Object.values(quiantities).reduce((a, b) => a + b, 0)
    const priceTotal = props.totalAmount +(shirt*20)+ (mug*5) +(cap*10)   
    return(
        <aside className="summary">
            <h1 className="main">Order Summary</h1>
            <ul className="summary-items wrapper border">
            <li>
                <span className="summary-items-number">{sumTotal} Items</span>
                <span className="summary-items-price">{priceTotal}<span className="currency">€</span></span
                >
            </li>
            </ul>
            <div className="summary-total wrapper">
            <ul>
                <li>
                <span className="summary-total-cost">Total cost</span>
                <span className="summary-total-price">{priceTotal}€</span>
                </li>
            </ul>
            <button type="submit">Checkout</button>
            </div>
      </aside>

    )
};


export default Summary;