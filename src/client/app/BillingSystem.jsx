import React from 'react';
import _ from 'underscore';
import DiscountSelector from './DiscountSelector.jsx';
import FormComponent from './FormComponent.jsx';
import TableComponent from './TableComponent.jsx';
import TotalRow from './TotalRow.jsx';

class BillingSystem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            headers: ["Item ID", "Name", "MRP $", "Price After Discount", "Quantity", "Remove"],
            discountSelected: "none"
        };
        this.addObject = this.addObject.bind(this);
        this.removeObject = this.removeObject.bind(this);
        this.discountChange = this.discountChange.bind(this);
    }
    addObject(obj) {
        let itemsArray = this.state.items;
        itemsArray.push(obj);
        this.setState({
            items: itemsArray
        });
    }
    removeObject(obj) {
        this.setState({
            items: _.without(this.state.items, obj)
        });
    }
    discountChange(val) {
        this.setState({
            discountSelected: val
        });
    }
    render() {
        return (
            <main className="container">
                <h1>Billing</h1>
                <DiscountSelector discountSelected={this.state.discountSelected} discountChange={this.discountChange} />
                <FormComponent addObject={this.addObject} />
                {this.state.items.length > 0 ? <TableComponent data={this.state.items} headers={this.state.headers} removeObject={this.removeObject}/> : <div className="noDataClass">No Item Selected</div> }
                {this.state.items.length > 0 ? <TotalRow data={this.state.items} discountSelected={this.state.discountSelected}/>  : null }
            </main>
        );
    }

}

export default BillingSystem;
