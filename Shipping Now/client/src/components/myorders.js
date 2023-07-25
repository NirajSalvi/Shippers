import React, { Component, useEffect,useState } from 'react';
import axios from 'axios';
import TableRow from './ordersRow';
// import Navbar from "../adminnavbar/adminnavbar"

// export default class Index extends Component {
  function Index() {
  // constructor(props) {
  //   super(props);
  //   this.state = { ship: [], email };
  // }
  // componentDidMount() {

    const [email, setEmail] = useState('');
    const [order, setOrder] = useState([]);

    function handleEmail(e) {
      setEmail(e);
    }

    // const handleOrder= (e)=> {
    //   setOrder((prevOrders) => [
    //     ...prevOrders,e
    //   ]);
    // }

    function handleOrder(e) {
      setOrder(order.concat(e));
    }

    useEffect(()=>{
    fetch("http://localhost:3000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        // this.setState({ email: data.data.email });
        console.log(data.data.email);
        // console.log(email);
        handleEmail(data.data.email);
      });
    axios.get('http://localhost:3000/order')
      .then(response => {
        // this.setState({ ship: response.data });
        console.log(response.data);
        handleOrder(response.data);
        console.log(order);
      })
      .catch(function (error) {
        console.log(error);
      })
  },[])
  // tabRow() {
  //   return this.state.ship.map(function (object, i) {
  //     return <TableRow obj={object} key={i} />;
  //   });
  // }
  
    const tabRow = () => {
      console.log(order);
    // return this.state.ship.map(function (object, i) {
    order.map(function (object, i) {
      <TableRow obj={object} key={i} />;
    });
  }
  // render() {
    return (
      <div>
      {/* <Navbar /> */}
      <h3 align="center">My Orders</h3>
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
              <th style={{textAlign:"center"}} colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tabRow}
        </tbody>
      </table>
    </div>
  );
}
// }


export default Index;