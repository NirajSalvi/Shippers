// import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import SortableTable from 'react-sortable-table';
import axios from 'axios';
import Navbar from "../adminpanel/components/adminnavbar/adminnavbar"
window.React = require('react');

function getFamilyName(name) {
    return name.split(' ').slice(-1)[0]
}

const FamilyNameSorter = {
    desc: (data, key) => {
        var result = data.sort(function (_a, _b) {
            const a = getFamilyName(_a[key]);
            const b = getFamilyName(_b[key]);
            if (a <= b) {
                return 1;
            } else if (a > b) {
                return -1;
            }
        });
        return result;
    },

    asc: (data, key) => {
        return data.sort(function (_a, _b) {
            const a = getFamilyName(_a[key]);
            const b = getFamilyName(_b[key]);
            if (a >= b) {
                return 1;
            } else if (a < b) {
                return -1;
            }
        })
    }
};

const FamilyCountSorter = {
    desc: (data, key) => {
        var result = data.sort(function (_a, _b) {
            const a = _a[key];
            const b = _b[key];
            if (a <= b) {
                return 1;
            } else if (a > b) {
                return -1;
            }
        });
        return result;
    },

    asc: (data, key) => {
        return data.sort(function (_a, _b) {
            const a = _a[key];
            const b = _b[key];
            if (a >= b) {
                return 1;
            } else if (a < b) {
                return -1;
            }
        })
    }
};

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         data: [
    //             { id: 3, name: 'Satoshi Yamamoto', class: 'B' },
    //             { id: 1, name: 'Taro Tanak', class: 'A' },
    //             { id: 2, name: 'Ken Asada', class: 'A' },
    //             { id: 4, name: 'Masaru Tokunaga', class: 'C' }
    //         ]
    //     };
    // }

    constructor(props) {
        super(props);
        this.state = { ship: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:3000/ship')
            .then(response => {
                console.log(response.data);
                this.setState({ ship: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const columns = [
            // {
            //     header: 'ID',
            //     key: '_id',
            //     defaultSorting: 'ASC',
            //     headerStyle: { fontSize: '15px', backgroundColor: '#FFDAB9', width: '100px' },
            //     dataStyle: { fontSize: '15px', backgroundColor: '#FFDAB9' },
            //     dataProps: { className: 'align-right' },
            //     render: (id) => { return <a href={'user/' + id}>{id}</a>; }
            // },
            {
                header: 'NAME',
                key: 'ship_name',
                headerStyle: { fontSize: '15px' },
                // headerProps: { className: 'align-left' },
                descSortFunction: FamilyNameSorter.desc,
                ascSortFunction: FamilyNameSorter.asc
            },
            {
                header: 'SOURCE',
                key: 'source',
                headerStyle: { fontSize: '15px' },
                descSortFunction: FamilyNameSorter.desc,
                ascSortFunction: FamilyNameSorter.asc
                // sortable: false
            },
            {
                header: 'DESTINATION',
                key: 'destination',
                headerStyle: { fontSize: '15px' },
                descSortFunction: FamilyNameSorter.desc,
                ascSortFunction: FamilyNameSorter.asc
                // sortable: false
            },
            {
                header: 'CAPACITY',
                key: 'capacity',
                headerStyle: { fontSize: '15px' },
                descSortFunction: FamilyCountSorter.desc,
                ascSortFunction: FamilyCountSorter.asc
                // sortable: false
            }
        ];

        const style = {
            backgroundColor: '#eee'
        };

        const iconStyle = {
            color: '#aaa',
            paddingLeft: '5px',
            paddingRight: '5px'
        };

        return (
            <SortableTable
                data={this.state.ship}
                columns={columns}
                style={style}
                iconStyle={iconStyle} />
        );
    }
}

// export default App;


// import React from 'react'

const sortableTable = () => {
    return (
        // <div>sortableTable</div>
        <>
           {/* <div>sortableTable</div> */}
            <Navbar></Navbar><App></App></>
    )
}

export default sortableTable;