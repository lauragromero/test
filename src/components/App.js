import React from 'react';
import '../stylesheets/App.css';
import {products} from '../data/data';
import ProductsList from './ProductsList';
import Summary from './Summary';
import { Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import PropTypes from 'prop-types';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      products: products, 
      cartQuantity:{
          shirt:0,
          mug:0, 
          cap:0
      },
      totalAmount:0
    };
    this.inputValue= this.inputValue.bind(this);
    this.increment= this.increment.bind(this);
    this.decrement= this.decrement.bind(this);
    this.renderRouterDetail = this.renderRouterDetail.bind(this); 
};

//función que maneja que se actualice el estado de la cantidad en función del valor de imput
inputValue(value, item){
    let {cartQuantity}= this.state;
    cartQuantity[item]= value;
    this.setState({cartQuantity});
};
//función que maneja que se actualice el estado de la cantidad en función del botón + 
increment(name, value){
    let {cartQuantity}= this.state;
    cartQuantity[name]= value;
    this.setState(prevState=>{
        return{
            cartQuantity:{...prevState.cartQuantity, 
                [name]: prevState.cartQuantity[name] +1
            },
        }
    });


};
//función que maneja que se actualice el estado de la cantidad en función del del botón -
decrement(name, value){
    let {cartQuantity}= this.state;
    cartQuantity[name]= value;
    if(value<=0){
        this.setState(prevState=>{
            return{
            cartQuantity:{...prevState.cartQuantity, 
                [name]: 0
            }}
        })
    }else{
        this.setState(prevState=>{
            return{
                cartQuantity:{...prevState.cartQuantity, 
                    [name]: prevState.cartQuantity[name] -1
                }
            }
        });
    }
       
};

//funcón para que se muestre la página de detalle en función del nombre del artículo que se ha clicklado, he usado react router para manejar que se muetre cada modelo según el id. 
renderRouterDetail(props){
    const routerId = props.match.params.id;
    return <Detail detail ={routerId}
                    products={this.state.products}
                    increment={this.increment}
                    cartQuantity={this.state.cartQuantity}
                    />
};

render(){
  return (
    <main className="App">
          <Switch>
            <Route exact path="/">
            <section className="products">
                <h1 className="main">Shopping cart</h1>
                <ProductsList 
                    products={this.state.products}
                    cartQuantity={this.state.cartQuantity}
                    inputValue={this.inputValue}
                    increment={this.increment}
                    decrement={this.decrement}
                    />
            </section>
            <Summary
                cartQuantity={this.state.cartQuantity}
                totalAmount= {this.state.totalAmount}/>
        </Route>
        <Route path="/detail/:id" render={this.renderRouterDetail}></Route> 
     </Switch>
     </main>
    )
  };
};


ProductsList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object), 
    cartQuantity: PropTypes.object
}
Summary.propTypes = { 
    cartQuantity: PropTypes.object
}
export default App;
