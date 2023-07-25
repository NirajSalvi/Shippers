import React, { useEffect } from 'react'
import axios from "axios";

function tracking2() {

    function handleclick(){
        axios.get('http://localhost:3000/trackingMap')
        .then(response => {
          // this.setState({ ship: response.data });
          console.log(response);
          console.log(response.data);
        //   handleOrder(response.data);
        //   console.log(order);
        })
        .catch(function (error) {
          console.log(error);
        })

    }

    return (
      <div>
        <div>Track my order</div>
        <button onClick={handleclick}>Go to tracker</button>  
      </div>
    )
}

export default tracking2