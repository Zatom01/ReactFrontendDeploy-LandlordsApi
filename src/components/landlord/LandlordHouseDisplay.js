
import React from 'react'
import { NavLink } from 'react-router-dom'

export const LandlordHouseDisplay = props => {
    return (

        <div>
            <NavLink to={{
                pathname: `/landlords/${props.landlordId}/houses/new`
            }}
            />
            < ul >
                <li>House Id: {props.houseId}</li>
                <li>state: {props.state}</li>
                <li>address: {props.address}</li>
                <li>city: {props.city}</li>
                <li>number of tenants: {props.numberOfTenants}</li>

                <NavLink to={{
                    pathname: `/landlords/${props.landlordId}/houses/${props.houseId}/edit`,
                    state: {
                        landlordId: props.landlordId,
                        houseId: props.houseId,
                        state: props.state,
                        address: props.address,
                        city: props.city,
                        numberOfTenants: props.numberOfTenants

                    }
                }}>Edit House</NavLink> <span>&nbsp;&nbsp;</span> <span>&nbsp;&nbsp;</span>

                < button onClick={() => props.removelandlordhouse(props.landlordId, props.houseId)} class="btn btn-danger">Delete?</button>

            </ul >
            <br />
            <br />
        </div >

    )
}
