import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchlandlordhouses, removelandlordhouse } from '../../actions/landlords'
import { LandlordHouseDisplay } from '../../components/landlord/LandlordHouseDisplay'
import HouseForm from './HouseForm'
import Navbar from '../../components/Navbar'
import { NavLink } from 'react-router-dom'





export class LandlordHousesList extends Component {


    handleClick = event => {
        event.preventDefault()
        this.props.fetchlandlordhouses(this.props.landlord_id)
    }

    render() {
        const houseForm = <HouseForm />
        const houses = this.props.houses.map((house) => {
            return (<LandlordHouseDisplay removelandlordhouse={this.props.removelandlordhouse} landlordId={house.user_id} address={house.address} city={house.city} state={house.state} numberOfTenants={house.number_of_tenants} houseId={house.id} />
            )
        })

        console.log(this.props.houses)

        const landlord_id = this.props.landlord_id
        return (
            <div>
                <p>These are the houses for this particular landlord</p>
                <button onClick={this.handleClick} > Houses </button><span>&nbsp;&nbsp;</span>

                <NavLink to={{
                    pathname: `/landlords/${landlord_id}/houses/new`,
                    state: {
                        landlordId: landlord_id
                    }
                }}>Add new House</NavLink><span>&nbsp;&nbsp;</span>



                {houses}

            </div >
        )


    }
}

const mapStateToProps = state => {
    return {
        houses: state.landlords.houses
    }

}

export default connect(mapStateToProps, { fetchlandlordhouses, removelandlordhouse })(LandlordHousesList)
