import React from 'react';
import { Link } from 'react-router-dom';

const Detail =(props)=>{
    const matchID = props.products.filter(item => parseInt(props.detail) === item.id);
    const increment=(e)=>{
        props.increment(e.target.name, parseInt(e.target.value))
    };
    return(
        <section className="products-model">
            {matchID.map(it=>{
                return(
            <div key={it.id} className="model-wraper"> 
                <div className="model-container-img">
                    <img  className="model-img"src={it.imgXl} alt={it.item}/>
                </div>
                <div className="model-information-container">
                    <Link  className="btn_close" to="/">&#x2715;</Link>
                    <div className="model-information">
                        <h3 className="model-card_title">
                            <span>{it.item}</span>
                            <span>
                                <span>{it.price}</span>
                                <span>€</span>
                            </span>
                        </h3>
                        <p className="model_card_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.
                        </p>
                        <p className="model_card_code">Product code {it.code}</p>
                        <Link to="/"><button name={it.item} value={props.cartQuantity[it.item]} onClick={increment} className="btn-model-add">Add to cart</button></Link>
                        </div>
                    </div>
            </div>)})}
        </section>

    )
};

export default Detail;