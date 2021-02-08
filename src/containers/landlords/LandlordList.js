import React, { Component } from 'react'
import LandlordCard from '../../components/landlord/LandlordCard'
import { connect } from 'react-redux'
import LandlordForm from './LandlordForm'
import { reset_houses } from '../../actions/landlords'
import './LandlordList.css'

export class LandlordList extends Component {


    componentDidMount() {
        this.props.reset_houses()
    }

    render() {


        if (this.props.loading) {
            return <div>Loading...</div>
        }

        else {

            const landlords = this.props.landlords.map((landlord, i) => {
                return <LandlordCard key={i} landlord={landlord} />
            })
            return (
                <div>

                    <h3>Here are the list of the LandLords</h3>

                    <ul>
                       <li>{landlords}</li>
                    </ul>


                    <h3>Add Landlord</h3>
                    <LandlordForm />
                </div>
            )

        }

    }
}

const mapStateToProps = state => {
    return {
        landlords: state.landlords.landlords,
        loading: state.landlords.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reset_houses: () => (dispatch(reset_houses()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandlordList)
