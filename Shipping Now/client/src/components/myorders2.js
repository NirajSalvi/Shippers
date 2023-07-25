import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './ordersRow';
// import Navbar from "../adminnavbar/adminnavbar"

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { ship: [] };
        this.email = '';
    }
    componentDidMount() {
        fetch("http://localhost:3000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({ email: data.data.email });
                // console.log(data.data.email);
                console.log(this.state.email);
                // handleEmail(data.data.email);
            });
        axios.get('http://localhost:3000/order')
            .then(response => {
                this.setState({ ship: response.data });
                // console.log(response.data);
                console.log(this.state.ship);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.ship.filter(e => e.email ===this.state.email).map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <h3 align="center">My Orders</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Item Description</th>
                            <th>Ship Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Tracking</th>
                            {/* <th colSpan="2">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}