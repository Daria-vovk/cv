import { Component } from "react";
import "./moneyEarn.scss";

class MoneyEarn extends Component {

     constructor() {
          super();
          this.state = {
               thousands: localStorage.getItem("thousands") ?? 103,
               hundreds: localStorage.getItem("hundreds") ?? 7,
               percentage: localStorage.getItem("percentage") ??  3
          }
     }

     

     addZeroes(num) {

          let customizedNum = null;

          switch(true) {
               case num < 10:
                    customizedNum = "00" + num;
                    break;
               case num < 100:
                    customizedNum = "0" + num
                    break;
               default:
                    customizedNum = num;
          }

          return customizedNum;
     };

     generateCurrentAmout() {

          const {thousands, hundreds, percentage} = this.state;
          
          switch(true) {
               case percentage < 999:
                    this.setState(({percentage}) => ({
                         percentage: +percentage + 1
                    }));
                    break;

               case hundreds < 999:
                    this.setState(({hundreds}) => ({
                         percentage: 0,
                         hundreds: +hundreds + 1
                    }));
                    break;

               case thousands < 99:
                    this.setState(({thousands}) => ({
                         percentage: 0,
                         hundreds: 0,
                         thousands: +thousands + 1
                    }));
                    break;
               default:
                    throw new Error("Error with timer")
          }
     }

     componentDidMount() {

          this.intervalId = setInterval(() => this.generateCurrentAmout(), 5000);
     }

     componentDidUpdate() {
          localStorage.setItem("percentage", this.state.percentage)
          localStorage.setItem("hundreds", this.state.hundreds)
          localStorage.setItem("thousands", this.state.thousands)
     }

     componentWillUnmount() {
          clearInterval(this.intervalId);
     }
    

    render() {


          const { thousands, hundreds, percentage } = this.state;

          return (
               <div className="money-block">
                    <span className="money-block__text" >Клієнти заробили разом зі мною: </span>
                    <span className="money-block__thousands">$ {thousands} </span> 
                    <span className="money-block__hundreds">{this.addZeroes(hundreds)}.</span>
                    <span className="money-block__percentage">{this.addZeroes(percentage)}</span>
               </div>
          );
    }
    
};

export default MoneyEarn;
