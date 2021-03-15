import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css'



export class Navbar extends Component {

    render() {

        // let link;
        // this.props.landlord ?
        return (
            <nav class="navbar navbar-light">

                <NavLink className="inactive" activeClassName="active" to="/">Home</NavLink> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

                <NavLink className="inactive" activeClassName="active" to="/landlords">Landlords</NavLink> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

                <NavLink className="inactive" activeClassName="active" to="/landlords/new">Create Landlord</NavLink> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        landlord: state.landlords.landlords
    }
}

export default connect(mapStateToProps)(Navbar)
