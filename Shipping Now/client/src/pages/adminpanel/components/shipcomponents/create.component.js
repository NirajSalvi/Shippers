
import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "../adminnavbar/adminnavbar"
import '../forms.css';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeShipName = this.onChangeShipName.bind(this);
        this.onChangeSource = this.onChangeSource.bind(this);
        this.onChangeDestination = this.onChangeDestination.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ship_name: '',
            source: '',
            destination: '',
            capacity: ''
        }
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
    onChangeCapacity(e) {
        this.setState({
            capacity: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            ship_name: this.state.ship_name,
            source: this.state.source,
            destination: this.state.destination,
            capacity: this.state.capacity
        };
        axios.post('http://localhost:3000/ship/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            ship_name: '',
            source: '',
            destination: '',
            capacity: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <Navbar />
                {/* <h3 style={{text-align: center}} >Add New Ship</h3> */}
                <div className="App">
        <div className="auth-wrapper">
                        <div className="auth-inner">
                            
                <h3 style={{textAlign: "center"  }} >Add New Ship</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form">

                    <div className="form-group mx-sm-3">
                        <label className='col-sm-2 '>Ship Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.ship_name}
                            onChange={this.onChangeShipName}
                        />
                    </div>
                    <div className="form-group mx-sm-3">
                        <label className='col-sm-2 '>Source: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.source}
                            onChange={this.onChangeSource}
                        />
                    </div>
                    <div className="form-group mx-sm-3">
                        <label className='col-sm-2 '>Destination: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.destination}
                            onChange={this.onChangeDestination}
                            />
                    </div>
                    <div className="form-group mx-sm-3">
                        <label className='col-sm-2 '>Capacity: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.capacity}
                            onChange={this.onChangeCapacity}
                            />
                    </div>
                    <div className="form-group mx-sm-3">
                        <input type="submit" value="Register Ship" className="btn btn-primary" />
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


