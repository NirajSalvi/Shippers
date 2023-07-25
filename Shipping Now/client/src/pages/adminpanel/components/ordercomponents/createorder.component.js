
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "../adminnavbar/adminnavbar"
import '../forms.css';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
        this.onChangeItemDes = this.onChangeItemDes.bind(this);
        this.onChangeShipName = this.onChangeShipName.bind(this);
        this.onChangeSource = this.onChangeSource.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            customer_name: '',
            item_des:'',
            ship_name: '',
            source: '',
            destination: '',
            weigth: '',
            price: '',
            email:'',
            payment_status: 'unpaid'
        }
    }
    onChangeCustomerName(e) {
        this.setState({
            customer_name: e.target.value
        });
    }
    onChangeItemDes(e) {
        this.setState({
            item_des: e.target.value
        });
    }
    onChangeShipName(e) {
        this.setState({
            ship_name: e.target.value
        });
    }
    onChangeSource(e) {
        this.setState({
            source: e.target.value
        })
    }
    onChangeDestination(e) {
        this.setState({
            destination: e.target.value
        })
    }
    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            customer_name: this.state.customer_name,
            item_des:this.state.item_des,
            ship_name: this.state.ship_name,
            source: this.state.source,
            destination: this.state.destination,
            weight: this.state.weight,
            price: this.state.price,
            email: this.state.email,
            payment_status:this.state.payment_status
        };
        axios.post('http://localhost:3000/order/add', obj)
            .then(res => console.log(res.data));

        // this.setState({
        //     customer_name: '',
        //     item_des:'',
        //     ship_name: '',
        //     source: '',
        //     destination: '',
        //     weight: '',
        //     price: '',
        //     pa
        // })

        window.location.href = "http://localhost:3001/indexOrder"
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <Navbar />
                <div className="App">
        <div className="auth-wrapper">
                        <div className="auth-inner">
                <h3 style={{textAlign: "center"  }}>Add New Order</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form">
                <div className="form-group">
                        <label >Customer Name:  </label>
                        <input
                            type="text"
                            className="form-control "
                            value={this.state.customer_name}
                            onChange={this.onChangeCustomerName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Customer Email:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Item Description:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.item_des}
                            onChange={this.onChangeItemDes}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ship Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.ship_name}
                            onChange={this.onChangeShipName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Source: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.source}
                            onChange={this.onChangeSource}
                            />
                    </div>
                    <div className="form-group">
                        <label>Destination: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.destination}
                            onChange={this.onChangeDestination}
                            />
                    </div>
                    <div className="form-group">
                        <label>Weigth: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Place Order" className="btn btn-primary" />
                        </div>
                        </div>
                </form>
            </div>
                    </div>
                </div>
                </div>
        )
    }
}


