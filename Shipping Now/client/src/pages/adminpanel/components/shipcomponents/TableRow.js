import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('http://localhost:3000/ship/delete/' + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.location.reload();
    }
    render() {
        return (
            <tr>
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
                    {this.props.obj.capacity}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary " state={{
                        ship_name: this.props.obj.ship_name,
                        source: this.props.obj.source,
                        destination: this.props.obj.destination,
                    capacity: this.props.obj.capacity}}>Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;