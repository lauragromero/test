import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const ProductsList =(props)=>{
  return(
        <React.Fragment>
        <ul className="products-list tableHead">
            <li className="products-list-title row">
              <div className="col-product">Product details</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-price">Price</div>
              <div className="col-total">Total</div>
            </li>
          </ul>
          {props.products.map(product=>{
            return(
              <Item
                key={product.id}
                price={product.price}
                item={product.item}
                img={product.img}
                id={product.id}
                code={product.code}
                cartQuantity={props.cartQuantity}
                inputValue={props.inputValue}
                increment={props.increment}
                decrement={props.decrement} 
                />
            )
          })}
        </React.Fragment>
 )
};

Item.propTypes = { 
  cartQuantity: PropTypes.object
};

export default ProductsList;