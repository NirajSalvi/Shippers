import React, { Component } from 'react';
import axios from 'axios';
import ShipDetail from './ShipDetail';
// import Navbar from "./adminnavbar/adminnavbar"
import Navbar from "../adminpanel/components/adminnavbar/adminnavbar"

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { ship: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:3000/ship')
            .then(response => {
                this.setState({ ship: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.ship.map(function (object, i) {
            return <ShipDetail obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <h3 align="center">Ship Catalogue</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Ship Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Capacity</th>

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