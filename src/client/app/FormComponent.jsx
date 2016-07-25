import React from 'react';

class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.makeObject = this.makeObject.bind(this);
    }
    makeObject(){
        if (document.querySelector("#itemId").value !== "" && document.querySelector("#name").value !== "" &&  document.querySelector("#cost").value !== "" ) {
            if (!isNaN(document.querySelector("#cost").value)) {
                var qty = isNaN(document.querySelector("#quantity").value) || document.querySelector("#quantity").value === "" ? 1 : parseInt(document.querySelector("#quantity").value);
                let obj = {
                    "Item ID":document.querySelector("#itemId").value,
                    "Name":document.querySelector("#name").value,
                    "MRP $":document.querySelector("#cost").value,
                    "Price After Discount":(document.querySelector("#cost").value *0.95).toFixed(2),
                    "Quantity": qty

                };
                this.props.addObject(obj);
            } else {
                alert("MRP and Quantity should be numeric");
            }
        } else {
            alert("Please Enter All the Values.");
        }
    }
    render() {
        return (
            <form role="form">
                <label className="formLabel" htmlFor="itemId">Item ID</label>
                <input id="itemId" type="text" />
                <label className="formLabel" htmlFor="name">Name</label>
                <input id="name" type="text" />
                <label className="formLabel" htmlFor="cost">MRP ($)</label>
                <input id="cost" type="text" />
                <label className="formLabel" htmlFor="quantity">Quantity</label>
                <input id="quantity" type="text" />
                <input className="addButton" type="button" value="Add Item" onClick={this.makeObject} />
            </form>

        );
    }
}

export default FormComponent;
