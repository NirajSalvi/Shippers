import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from "../adminnavbar/adminnavbar"
import { useNavigate } from 'react-router-dom';


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
        
    const navigate = useNavigate();


    const location = useLocation()
    // const { personName, Source, Destination, Capacity } = location.state
    // const { personName, Source, Destination, Capacity } = location.state
    console.log(location.state);

    const [customer_name, setCustomerName] = useState(location.customer_name);
    const [email, setEmail] = useState(location.email);
    const [item_des, setItemDes] = useState(location.item_des);
    const [ship_name, setShipName] = useState(location.ship_name);
    const [source, setSource] = useState(location.source);
    const [destination, setDestination] = useState(location.destination);
    const [weight, setWeight] = useState(location.weight);
    const [price, setPrice] = useState(location.price);
    const [payment_status, setPaymentStatus] = useState(location.payment_status);
    const { id } = useParams();

    useEffect(() => {
        setCustomerName(location.state.customer_name);
        setEmail(location.state.email)
        setItemDes(location.state.item_des);
        setShipName(location.state.ship_name);
        setSource(location.state.source);
        setDestination(location.state.destination);
        setWeight(location.state.weight);
        setPrice(location.state.price);
        setPaymentStatus(location.state.payment_status);
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

    function onChangeCustomerName(e) {
        // this.setState({
        //     person_name: e.target.value
        // });
        setCustomerName(e.target.value);
    }
    function onChangeEmail(e) {
        // this.setState({
        //     person_name: e.target.value
        // });
        setEmail(e.target.value);
    }
    function onChangeItemDes(e) {
        // this.setState({
        //     person_name: e.target.value
        // });
        setItemDes(e.target.value);
    }
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
    function onChangeWeight(e) {
        // this.setState({
        //     business_gst_number: e.target.value
        // })
        setWeight(e.target.value);
    }
    function onChangePrice(e) {
        // this.setState({
        //     business_gst_number: e.target.value
        // })
        setPrice(e.target.value);
    }
    function onChangePaymentStatus(e) {
        // this.setState({
        //     business_gst_number: e.target.value
        // })
        setPaymentStatus(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();


        const obj = {
            customer_name: customer_name,
            email: email,
            item_des:item_des,
            ship_name: ship_name,
            source: source,
            destination: destination,
            weight: weight,
            price: price,
            payment_status:payment_status
        };
        axios.put('http://localhost:3000/order/update/' + id, obj)
            .then(res => console.log(res.data))
                .then(navigate('/indexOrder'));
        // navigate('/indexOrder');
        // this.props.history.push('/indexOrder');
    };


    return (
        <div style={{ marginTop: 10 }}>
            <Navbar />
            <h3 align="center">Update Order</h3>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                    <label>Customer Name:  </label>
                    <input
                        type="text"
                        className="form-control"
                        value={customer_name}
                        onChange={onChangeCustomerName}
                    />
                </div>
                <div className="form-group">
                    <label>Customer Email:  </label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>
                <div className="form-group">
                    <label>Item Description:  </label>
                    <input
                        type="text"
                        className="form-control"
                        value={item_des}
                        onChange={onChangeItemDes}
                    />
                </div>
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
                    <label>Weight: </label>
                    <input type="text"
                        className="form-control"
                        value={weight}
                        onChange={onChangeWeight}
                    />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={onChangePrice}
                    />
                </div>
                <div className="form-group">
                    <label>Payment Status: </label>
                    <input type="text"
                        className="form-control"
                        value={payment_status}
                        onChange={onChangePaymentStatus}
                    />
                </div>
                <div className="form-group">
                    <input type="submit"
                        value="Update Order"
                        className="btn btn-primary"
                        />
                </div>
            </form>
        </div>
    )

}

export default Edit;