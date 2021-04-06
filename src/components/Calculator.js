import React, { Component } from 'react';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import $ from 'jquery'


export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = { selectValue: 'popular', price: 0};
        this.handleChange = this.handleChange.bind(this);
        this.changePrice = this.changePrice.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectValue: event.target.value
        });
    }



    changePrice(e) {
        if ($(`.services#${e.target.parentNode.parentNode.parentNode.parentNode.id} > .MuiFormControlLabel-root > .calc-check input:checked`).length > 0) {
            $(`select#${e.target.parentNode.parentNode.parentNode.parentNode.id}.form-select`).prop('disabled', true)
        } else {
            $(`select#${e.target.parentNode.parentNode.parentNode.parentNode.id}.form-select`).prop('disabled', false)
        }
        


        let targetPrice = parseInt(e.target.value)
        this.props.filter[this.state.selectValue][e.target.id].coast = targetPrice - targetPrice * 2
        let price = this.state.price + targetPrice
        this.setState({
            price: price
        });
        
    }

    render() {
        let filter = this.props.filter[this.state.selectValue]
        var temp = []
        for (let key in filter) {
            temp.push(filter[key])
        }
        return (
            <>
                <div className="workPlace">
                    <p className="calc-title">Расчет стоимости ремонта</p>
                    <select className="form-select" id={this.props.id} onChange={this.handleChange.bind(this)} value={this.state.selectValue}>
                        <option value="popular">Популярное</option>
                        <option value="engine">Ремонт двигателя</option>
                        <option value="brake">Ремонт тормозной системы</option>
                    </select>
                </div>
                <div className="services" id={this.props.id}>
                    {

                        temp.map((item, index) =>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={this.changePrice}
                                        color="primary"
                                        value={item.coast}
                                        id={index}
                                        className="calc-check"
                                    />
                                }
                                label={item.name}
                            />
                        )
                    }
                </div>
                <p>От <span className="tpm-price">{this.state.price}</span> руб.</p>
            </>
        );
    }
}
