import React, { Component } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

// function Payment() {
//     const navigate = useNavigate();
//     navigate('/payment');
// }

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:3000/order/delete/' + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        window.location.reload();
        
    }
    Payment(props) {
        window.location.href=('http://localhost:3001/payment/'+props)
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.customer_name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.item_des}
                </td>
                <td>
                    {this.props.obj.ship_name}
                </td>
                <td>
                    {this.props.obj.source}
                </td>
                <td>
                    {this.props.obj.destination}
                </td>
                <td>
                    {this.props.obj.weight}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    {this.props.obj.payment_status}
                </td>
                <td>
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
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
                {/* <td>
                    <button onClick={() => { this.Payment(this.props.obj._id) }} className="btn btn-danger">Pay</button>
                </td> */}
            </tr>
        );
    }
}

export default TableRow;