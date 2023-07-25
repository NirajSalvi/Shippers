import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Navbar from "../adminnavbar/adminnavbar"

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { ship: [] };
    }
    componentDidMount() {
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
        return this.state.ship.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <h3 align="center">Order Catalogue</h3>
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
                            <th colSpan="2">Action</th>
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