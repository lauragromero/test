import React from 'react';
import { Link } from 'react-router-dom';


const Item =(props)=>{
  const {item, img, code, price, id, cartQuantity}= props;
  console.log(props)
    const inputValue=(e)=>{
        props.inputValue(parseInt(e.target.value), e.target.name) 
    }
    const increment=(e)=>{
      props.increment(e.target.name,parseInt(e.target.value)) 
    }
    const decrement=(e)=>{
      props.decrement(e.target.name,parseInt(e.target.value))
    }
    return(
        <li className="product row">
        <div className="col-product">
          <figure className="product-image">
            <img src={img} alt={item} />
            <div className="product-description">
              <h1 className="product-name"><Link to={`/detail/${id}`}>{item}</Link></h1>
              <p className="product-code">Product code {code}</p>
            </div>
          </figure>
        </div>
        <div className="col-quantity">
          <button  name={item} value={cartQuantity[item]} onClick={decrement} className="count" >-</button>
          <input name={item} id={id} type="text" onChange={inputValue}  className="product-quantity" value={cartQuantity[item]}/>
          <button name={item} value={cartQuantity[item]}  className="count" onClick={increment}>+</button>
        </div>
        <div className="col-price">
          <span className="product-price">{price}</span>
          <span className="product-currency currency">€</span>
        </div>
        <div className="col-total">
          <span className="product-price">{cartQuantity[item]*price}</span>
          <span className="product-currency currency">€</span>
        </div>
      </li>
    )
}
export default Item;