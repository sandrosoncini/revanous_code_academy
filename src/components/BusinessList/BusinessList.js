import React from 'react';
import './BusinessList.css';
import '../Business/Business';
import { Business } from '../Business/Business';

export class BusinessList extends React.Component {

    render(){
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
 
            </div>
        )
    }

}