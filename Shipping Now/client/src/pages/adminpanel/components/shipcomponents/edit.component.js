import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from "../adminnavbar/adminnavbar"


function Edit() {
    // constructor(props) {
    //     super(props);
    //     this.onChangePersonName = this.onChangePersonName.bind(this);
    //     this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    //     this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);

    //     this.state = {
    //         person_name: '',
    //         business_name: '',
    //         business_gst_number: ''
    //     }
    // }

    const location = useLocation()
    // const { personName, Source, Destination, Capacity } = location.state
    // const { personName, Source, Destination, Capacity } = location.state
    console.log(location.state);

    const [ship_name, setShipName] = useState(location.ship_name);
    const [source, setSource] = useState(location.source);
    const [destination, setDestination] = useState(location.destination);
    const [capacity, setCapacity] = useState(location.capacity);
    const { id } = useParams();

    useEffect(() => {
        setShipName(location.state.ship_name);
        setSource(location.state.source);
        setDestination(location.state.destination);
        setCapacity(location.state.capacity);
    },[]);


    // componentDidMount() {



    //     axios.get('http://localhost:3000/business/edit/' + this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 ship_name: response.data.ship_name,
    //                 source: response.data.source,
    //                 destination: response.data.destination,
    //                 capacity: response.data.capacity
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }

    function onChangeShipName(e) {
        // this.setState({
        //     person_name: e.target.value
        // });
        setShipName(e.target.value);
    }
    function onChangeSource(e) {
        // this.setState({
        //     business_name: e.target.value
        // })
        setSource(e.target.value);
    }
    function onChangeDestination(e) {
        // this.setState({
        //     business_name: e.target.value
        // })
        setDestination(e.target.value);
    }
    function onChangeCapacity(e) {
        // this.setState({
        //     business_gst_number: e.target.value
        // })
        setCapacity(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();


        const obj = {
            ship_name: ship_name,
            source: source,
            destination: destination,
            capacity: capacity
        };
        axios.put('http://localhost:3000/ship/update/' + id, obj)
            .then(res => console.log(res.data));

        // this.props.history.push('/index');
    };


    return (
        <div style={{ marginTop: 10 }}>
            <Navbar />
            <h3 align="center">Update Ship Details</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Ship Name:  </label>
                    <input
                        type="text"
                        className="form-control"
                        value={ship_name}
                        onChange={onChangeShipName}
                    />
                </div>
                <div className="form-group">
                    <label>Source: </label>
                    <input type="text"
                        className="form-control"
                        value={source}
                        onChange={onChangeSource}
                    />
                </div>
                <div className="form-group">
                    <label>Destination: </label>
                    <input type="text"
                        className="form-control"
                        value={destination}
                        onChange={onChangeDestination}
                    />
                </div>
                <div className="form-group">
                    <label>Capacity: </label>
                    <input type="text"
                        className="form-control"
                        value={capacity}
                        onChange={onChangeCapacity}
                    />
                </div>
                <div className="form-group">
                    <input type="submit"
                        value="Update Details"
                        className="btn btn-primary" />
                </div>
            </form>
        </div>
    )

}

export default Edit;