import React, { Component } from 'react';
import PaymentPage from '../pages/adminpanel/components/ordercomponents/payment_refactor'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

// function Payment() {
//     const navigate = useNavigate();
//     navigate('/payment');
// }

// class TableRow extends Component {
function TableRow(props){
    // constructor(props) {
    //     super(props);
    //     this.delete = this.delete.bind(this);
    // }
    // function del(
    //     axios.get('http://localhost:3000/order/delete/' + this.props.obj._id)
    //         .then(console.log('Deleted'))
    //         .catch(err => console.log(err))
    //     window.location.reload();
        
    // )
    function Payment(props) {
        window.location.href=('http://localhost:3001/payment/'+props.id)
        // console.log(props);
        // <PaymentPage amount={props.amount} id={props.id}></PaymentPage>
    }
    

    // function Tracking(props) {
        
    // }
    // function pay(props) {
    //     const script = document.createElement("script");
    //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     console.log(props);
    // }
    // render() {
        return (
            <tr>
                <td>
                    {props.obj.customer_name}
                </td>
                <td>
                    {props.obj.email}
                </td>
                <td>
                    {props.obj.item_des}
                </td>
                <td>
                    {props.obj.ship_name}
                </td>
                <td>
                    {props.obj.source}
                </td>
                <td>
                    {props.obj.destination}
                </td>
                <td>
                    {props.obj.weight}
                </td>
                <td>
                    {props.obj.price}
                </td>
                <td>
                    {props.obj.payment_status}
                </td>
                {/* <td>
                    <Link to={"/editOrder/" + this.props.obj._id} className="btn btn-primary " state={{
                        customer_name: this.props.obj.customer_name,
                        email: this.props.obj.email,
                        item_des: this.props.obj.item_des,
                        ship_name: this.props.obj.ship_name,
                        source: this.props.obj.source,
                        destination: this.props.obj.destination,
                        weight: this.props.obj.weight,
                        price: this.props.obj.price,
                        payment_status: this.props.obj.payment_status
                    }}>Edit</Link>
                </td> */}
                {/* <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td> */}
                <td>
                    {/* <button onClick={() => { this.Payment(this.props.obj._id) }} className="btn btn-danger">Pay</button> */}
                    {/* // <button onClick={() => { Payment(props.obj._id) }} className="btn btn-danger">Pay</button> */}
                    <button onClick={() => { Payment({id:props.obj._id,amount:props.obj.price}) }} disabled={props.obj.payment_status==='unpaid'?false:true} className="btn btn-danger">Pay</button>
                </td>
                <td>                    
                {/* <Link to={"/trackingMap/" + props.obj._id} disabled={props.obj.payment_status==='unpaid'?true:false} className="btn btn-primary " state={{                        
                        source: props.obj.source,
                        destination: props.obj.destination
                    }}>Track</Link> */}
                    <Link to={"/trackingMap/" + props.obj._id +'/'+props.obj.source+'/'+props.obj.destination} disabled={props.obj.payment_status==='unpaid'?true:false} className="btn btn-primary " state={{                        
                        source: props.obj.source,
                        destination: props.obj.destination
                    }}>Track</Link>
                </td>
            </tr>
        );
    
}

export default TableRow;