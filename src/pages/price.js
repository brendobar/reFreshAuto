import React, { Component } from 'react';
import Calculator from '../components/Calculator'
import $ from 'jquery'
import Button from '@material-ui/core/Button';



export default class Serviceсard extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], category: [], filter: {}, addPlace: [], addId: 0, genPrice: 0};
    }
    

    componentDidMount() {
        fetch("http://localhost:5000/api/price")
            .then(res => { var temp = res.json(); return temp; })
            .then(
                (result) => {
                    let temp_arr = []
                    let temp_obj = []
                    let filter_obj = {}
                    for (let i = 0; i < Object.values(result).length; i++) {
                        var filter;
                        if (filter == undefined) {
                            filter = result[i].filter
                            filter_obj[filter] = temp_obj;
                            switch (filter) {
                                case 'popular':
                                    temp_arr.push({ "filter": "Популярное" })
                                    break;
                                case 'engine':
                                    temp_arr.push({ "filter": "Ремонт двигателя" })
                                    break;
                                case 'brake':
                                    temp_arr.push({ "filter": "Ремонт тормозной системы" })
                                    break;
                            }

                        } else if (result[i + 1] == undefined) {
                            temp_arr.push(
                                {
                                    "name": result[i].name,
                                    "coast": parseInt(result[i].coast.split(' ')[1]),
                                }
                            )
                            temp_obj.push(
                                {
                                    "name": result[i].name,
                                    "coast": parseInt(result[i].coast.split(' ')[1]),
                                }
                            )
                        } else if (result[i + 1].filter != filter) {
                            temp_obj = []
                            filter = result[i + 1].filter
                            filter_obj[filter] = temp_obj;
                            switch (filter) {
                                case 'popular':
                                    temp_arr.push({ "filter": "Популярное" })
                                    break;
                                case 'engine':
                                    temp_arr.push({ "filter": "Ремонт двигателя" })
                                    break;
                                case 'brake':
                                    temp_arr.push({ "filter": "Ремонт тормозной системы" })
                                    break;
                            }
                        } else {
                            temp_arr.push(
                                {
                                    "name": result[i].name,
                                    "coast": parseInt(result[i].coast.split(' ')[1]),
                                }
                            )
                            temp_obj.push(
                                {
                                    "name": result[i].name,
                                    "coast": parseInt(result[i].coast.split(' ')[1]),
                                }
                            )
                        }
                    }

                    this.setState({
                        isLoaded: true,
                        items: temp_arr,
                        filter: filter_obj
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    addPosition() {
        let test = this.state.addId+1
        this.setState({
            addId: test,
            addPlace: this.state.addPlace.concat(<Calculator filter = {this.state.filter} id={this.state.addId}/>)
        });
        // $(".tpm-price").each(() => {   
        //     this.setState({
        //         genPrice: parseInt(this.state.genPrice) + parseInt($(".tpm-price").text())
        //     });
        // })
    }

        



    render() {
        

        return (
            <div className="price">
                <div className="clac">
                    <Calculator filter = {this.state.filter} id = {this.state.addId}/>
                    {this.state.addPlace.map(child => child)}
                    <Button className="addButton" onClick={this.addPosition.bind(this)}>+</Button>
                </div>
                
                <table>
                    <tbody>
                        <th>Вид работ</th>
                        <th>Цена</th>
                        {
                            this.state.items.map((item) => (
                                <tr>
                                    {
                                        Object.values(item).map((field) =>
                                            <td className={(Object.values(item).length == 1) ? "Name" : ""} colSpan={(Object.values(item).length == 1) ? 2 : 1}>{(Number.isInteger(field))?"от "+field:field}</td>
                                        )
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
