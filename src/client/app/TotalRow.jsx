import React from 'react';
import _ from 'underscore';
import Constants from '../Constants.js';

class TotalRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
        this.getTotal = this.getTotal.bind(this);
    }
    getTotal(){
        let total = _.reduce(_.map(this.props.data, function(value) {
                return value["Price After Discount"] * value["Quantity"];
            }), function(memo, num) {
                return memo + num;
            }, 0).toFixed(2);
        this.state.total = total;
        return total;
    }
    getDiscount(){
        return (this.state.total * (Constants.discountRates[this.props.discountSelected])/100).toFixed(2);
    }
    getTotalAfterDiscount(){
        return (this.state.total * (100 - Constants.discountRates[this.props.discountSelected])/100).toFixed(2);
    }
    render() {
        return (
            <section className="totalContainer wbkitFlex">
                <div className="helpContainer displaywidth1"></div>
                <div className="amountContainer displaywidth4">
                    <div className="calculationContainer">
                        <div className="wbkitFlex">
                            <div className="displaywidth2">
                                <span className="headerText">SUBTOTAL</span>
                            </div>
                            <div className="displaywidth1 value">
                                <span className="headerText price"><sup>$</sup>{this.getTotal()}</span>
                            </div>
                        </div>
                        <div className="wbkitFlex">
                            <div className="displaywidth2">
                                <span className="headerText">Special Discount</span>
                            </div>
                            <div className="displaywidth1 value">
                                <span className="headerText price"><sup>$</sup>{this.getDiscount()}</span>
                            </div>
                        </div>
                        <div className="wbkitFlex">
                            <div className="displaywidth2">
                                <span className="headerText">TOTAL</span>
                            </div>
                            <div className="displaywidth1 value">
                                <span className="headerText price"><sup>$</sup>{this.getTotalAfterDiscount()}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        );
    }

}

export default TotalRow;
