import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateLandlordHouse } from '../../actions/landlords'

export class LandlordHouseUpdate extends Component {

    state = {
        state: this.props.location.state.state,
        city: this.props.location.state.city,
        address: this.props.location.state.address,
        number_of_tenants: this.props.location.state.numberOfTenants
    }



    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = event => {
        event.preventDefault()

        const landlordId = this.props.location.state.landlordId
        const houseId = this.props.location.state.houseId
        const house = this.state

        if (this.state.state !== "" && this.state.city !== "" && this.state.address !== "" && this.state.number_of_tenants !== "") {
            const house = this.state

            this.props.updateLandlordHouse(landlordId, houseId, house)


            this.setState({
                state: "",
                city: "",
                address: "",
                number_of_tenants: ""
            })

        }

    }



    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <div>
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id="state" class="form-control" value={this.state.state} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id="city" class="form-control" value={this.state.city} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="address">Address: </label>
                        <input type="text" name="address" id="address" class="form-control" value={this.state.address} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor="number_of_tenants">Number of Tenants: </label>
                        <input type="text" name="number_of_tenants" id="number_of_tenants" class="form-control" value={this.state.number_of_tenants} onChange={this.handleChange} />
                    </div>

                    <br />
                    <input type="submit" value="Update House" class="btn btn-primary" />

                </form>

            </div>
        )
    }
}

export default connect(null, { updateLandlordHouse })(LandlordHouseUpdate)
