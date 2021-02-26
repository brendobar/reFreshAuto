import React, { Component } from 'react';




export default class Serviceсard extends Component {
constructor(props) {
    super(props);
    this.state = {items: []};
}


componentDidMount() {
    fetch("http://localhost:5000/api/price")
      .then(res => {var temp = res.json(); console.log(temp);console.log(typeof temp); return temp;})
      .then(
        (result) => {
            console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log("----" + this.state.items)
  }






    render() {
        return (
            <div class="price">
                <div></div>
                <table>
                    <tbody>
                            <th>Вид работ</th>
                            <th>Цена</th>
                        {
                            this.state.items.map((item) => (
                                <tr>{}
                                    {
                                        Object.values(item).map((field) => 
                                            <td class={(Object.values(item).length==1)?"Name":""} colSpan={(Object.values(item).length==1)?2:1}>{field}</td>
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
