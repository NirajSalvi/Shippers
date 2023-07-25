import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useLocation, useParams } from 'react-router';

function App(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         amount: 0,
    //     }
    //     this.handleChange = this.handleChange.bind(this);
    //     this.openPayModal = this.openPayModal.bind(this);

    // }
    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    // }
    // console.log(props);
    
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const [amount, setAmount] = useState(0);
    const [status, setStatus] = useState(location.status);
    // const [data, setData] = useState({});
    var data, findata;

    // function handleData(props) {

        // }
        
        function checkId(e) {
            return e._id === id;
    }

    function handleChange(evt) {
        // console.log(evt.target.value)
        // this.setState({
        //     amount: evt.target.value
        // })
        setAmount(evt);
    }
    function openPayModal(amt) {
        var amount2 = amt * 100; //Razorpay consider the amount in paise
        var options = {
            "key": 'rzp_test_UW5QeJOW1RsnhV',
            "amount": 0, // 2000 paise = INR 20, amount in paisa
            "name": "",
            "description": "",
            'order_id': '',
            "handler": function (response) {
                console.log(response);
                var values = {
                    razorpay_signature: response.razorpay_signature,
                    razorpay_order_id: response.razorpay_order_id,
                    transactionid: response.razorpay_payment_id,
                    transactionamount: amount2,
                }
                const obj = {
                    payment_status: 'paid'
                }

                axios.post('http://localhost:3000/payment', values)
                    .then(res => {
                        alert("Success")
                        axios.get('http://localhost:3000/order')
                            .then(response => {
                                // this.setState({ ship: response.data });
                                // setData(response.data.filter(checkId)[0])
                                data = response.data.filter(checkId);
                                data[0].payment_status = "paid"
                                findata = data[0];
                                console.log(response.data.filter(checkId));
                                console.log(data);
                                console.log(findata);
                                axios.put('http://localhost:3000/order/update/' + id, findata)
                                .then(res => console.log(res.data))
                                    .then(navigate("/myOrders"))
                                    .catch(function (error) {
                                        console.log(error);
                                    })
                                    // .then(navigate("/indexOrder"))
                                })
                                // })
                                // .catch(function (error) {
                                    //     console.log(error);
                                // })
                    })
                        // .then(console.log("error"))
                        //     .then(
                            //             // console.log("err");
                            //             axios.post('http://localhost:3000/order/update/' + id, findata)
                            //                 .then(res => console.log(res.data))
                        //                 .then(navigate("/indexOrder"))
                        //                 .catch(function (error) {
                            //                     console.log(error);
                        //                 })
                        //         )
                        //         .catch(e => console.log(e))
                    },
                    "prefill": {
                        "name": 'Niraj Salvi',
                        "email": 'nirajnsalvi@gmail.com',
                        "contact": '1234567890',
                    },
                    "notes": {
                        "address": "Hello World"
                    },
                    "theme": {
                        "color": "#528ff0"
                    }
        };
        axios.post('http://localhost:3000/payment/order', { amount: amount2 })
                .then(res => {
                    options.order_id = res.data.id;
                    options.amount = res.data.amount;
                    console.log(options)
                    var rzp1 = new window.Razorpay(options);
                    rzp1.open();
                })
                .catch(e => console.log(e))
                
            };
            useEffect(() => {
                axios.get('http://localhost:3000/order')
                    .then(response => {
                        // this.setState({ ship: response.data });
                        // setData(response.data.filter(checkId)[0])
                        // data = response.data.filter(checkId);
                        // data[0].payment_status = "paid"
                        // findata = data[0];
                        console.log(response.data.filter(checkId)[0]);
                        // console.log(data);
                        console.log(response.data);
                        setStatus(response.data.filter(checkId)[0].status)
                        handleChange(response.data.filter(checkId)[0].price);
                        console.log(amount);
                    })
                const script = document.createElement("script");
                script.src = "https://checkout.razorpay.com/v1/checkout.js";
                script.async = true;
                document.body.appendChild(script);
                console.log(props);
            }, [])
        // render() {
        return (
            <div>
                Amount to be paid:<input readOnly type="number" name="amount" value={amount} onChange={handleChange} />
                <button onClick={(e) => { openPayModal(amount) }}>Pay</button>
            </div>
        );
        // }
        
    }

    // function Payment() {
    //     const navigate = useNavigate();
    //     return <App navigate={navigate} />
    // }

    export default App;
// export default Payment;
// export default withMyHook(App);
