import React from 'react';
import _ from 'underscore';

class DiscountSelector extends React.Component {

    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <form action="">
                <label>Special Discount : </label>
                <input id ="none" type="radio" name="discount" value="none" checked={this.props.discountSelected === "none"} onChange={this.props.discountChange.bind(this, "none")} /> 
                <label htmlFor="none" >None</label>
                <input id ="employee" type="radio" name="discount" value="employee" onChange={this.props.discountChange.bind(this, "employee")} /> 
                <label htmlFor="employee" >Employee</label>
                <input id ="affiliate" type="radio" name="discount" value="affiliate" onChange={this.props.discountChange.bind(this, "affiliate")} /> 
                <label htmlFor="affiliate" >Affiliate</label>
              </form>
        );
    }
}

export default DiscountSelector;
