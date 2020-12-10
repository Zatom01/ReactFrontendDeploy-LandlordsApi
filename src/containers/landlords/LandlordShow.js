import React, { Component } from 'react'
import LandlordHousesList from '../houses/LandlordHousesList'
import { landlordHouseNumber } from '../../actions/landlords'
import { connect } from 'react-redux'


export class LandlordShow extends Component {

    state = {
        landlord: {
            name: "",
            age: "",
            state: "",
            city: "",
            id: ""
        }
    }



    componentDidMount() {

        this.setState({
            landlord: {
                name: this.props.location.state.name,
                age: this.props.location.state.age,
                state: this.props.location.state.state,
                city: this.props.location.state.city,
                id: this.props.location.state.id
            }

        })

        //fetch request to load houses, and updates house_number in store
        this.props.landlordHouseNumber(this.props.location.state.id)

    }

    render() {
        return (
            <ul>
                <h3>Name: {this.state.landlord.name}</h3>
                <li>Age: {this.state.landlord.age}</li>
                <li>State: {this.state.landlord.state}</li>
                <li>City: {this.state.landlord.city}</li>
                <li>Number of Houses owned: {this.props.houseNumber}</li>
                <li><LandlordHousesList landlord_id={this.state.landlord.id} /></li>
                <li>Owner id: {this.state.landlord.id}</li>



            </ul>

        )
    }
}

const mapDispatchToProps = {
    landlordHouseNumber
}

const mapStateToProps = state => {
    return {
        houseNumber: state.landlords.house_number
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LandlordShow)
