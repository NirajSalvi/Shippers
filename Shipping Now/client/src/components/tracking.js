import React from 'react'

export class DisplayMapClass extends React.Component {
  mapRef = React.createRef();
  state = {
    map: null
  };

  

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "3mT-Cc4jNgMolrvNTchm_t5oPHiX5q2_5ipfVgYnuEw"
    });

    const defaultLayers = platform.createDefaultLayers();

    function addPolylineToMap(map) {
      var lineString = new H.geo.LineString();
      var lineString2 = new H.geo.LineString();
      var lineString3 = new H.geo.LineString();
      var lineString4 = new H.geo.LineString();
    
      lineString.pushPoint({lat:53.3477, lng:-6.2597});
      lineString.pushPoint({lat:51.5008, lng:-0.1224});
      lineString.pushPoint({lat:48.8567, lng:2.3508});
      lineString.pushPoint({ lat: 52.5166, lng: 13.3833 });
      
      //20.915395, 70.3666647 veraval
      //23.2333341, 68.5970652 jakahu
      //25.361703, 56.3474419 khor al fakhan
      //10.4518569, 51.3924914 dante
      //-12.1846758, 49.2989701 suarez
      lineString2.pushPoint({lat:20.915395, lng:70.3666647});
      lineString2.pushPoint({ lat: 10.4518569, lng: 51.3924914 });
      
      lineString3.pushPoint({lat:20.915395, lng:70.3666647});
      lineString3.pushPoint({ lat: -12.1846758, lng: 49.2989701 });
      
      lineString4.pushPoint({lat:23.2333341, lng:68.5970652});
      lineString4.pushPoint({lat:25.361703, lng: 56.3474419});
    
      // map.addObject(new H.map.Polyline(
      //   lineString, { style: { lineWidth: 4 }}
      // ));
      map.addObject(new H.map.Polyline(
        lineString2, { style: { lineWidth: 4 }}
      ));
      map.addObject(new H.map.Polyline(
        lineString3, { style: { lineWidth: 4 }}
      ));
      map.addObject(new H.map.Polyline(
        lineString4, { style: { lineWidth: 4 }}
      ));

    }
    

    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 10.2333341, lng: 68.5970652 },
        zoom: 3,
        pixelRatio: window.devicePixelRatio || 1
      }
    );

    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    // This variable is unused and is present for explanatory purposes
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components to allow the user to interact with them
    // This variable is unused
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    this.setState({ map });
    addPolylineToMap(map);
  }

  // componentWillUnmount() {
  //   this.state.map.dispose();
  // }

  render() {
    return <div ref={this.mapRef} style={{ height: "1000px" }} />;
  }
}

// const tracking = () => {

  
//   return (
//     <div>tracking</div>
//   )
// }

// export default tracking