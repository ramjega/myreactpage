import React, { Component } from 'react';

class CarDetail extends Component {
    render(){
        // Car array
        const phones = this.props.data;
        // Car Id from param
        const id = this.props.match.params.id;
        // Filter car with ID
        const car = phones.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <h1 className="text-primary">{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul className="text-primary">
                           <li ><strong>Model</strong>: {car[0].model}</li>
                           <li><strong>Make</strong>: {car[0].make}</li>
                           <li><strong>Year</strong>: {car[0].year}</li>
                           <li><strong>Price</strong>: {car[0].price}</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail
