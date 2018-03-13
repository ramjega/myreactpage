import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Car extends Component {
    render(){
      console.log(this.props);
        // Get data from route props
        const phones = this.props.data;
        // Map through phones and return linked phones
        const carNode = phones.map((car) => {
            return (
                 <Link
                    to={"/phones/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
            <div>
                <h1 className="text-primary">Phones page</h1>
                <div className="list-group-item-active">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car
