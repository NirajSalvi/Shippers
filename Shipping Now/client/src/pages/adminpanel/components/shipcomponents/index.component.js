import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import Navbar from "../adminnavbar/adminnavbar"
import './styles.css'

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
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <h3 align="center">Ship Catalogue</h3>
                <table className="table table-striped table-dark" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Ship Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Capacity</th>
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