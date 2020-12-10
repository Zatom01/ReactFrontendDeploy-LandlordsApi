import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLandlord } from '../../actions/landlords'

export class LandlordForm extends Component {

    state = {
        name: "",
        age: "",
        state: "",
        city: ""
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = event => {
        event.preventDefault();

        if (this.state.name !== "" && this.state.age !== "" && this.state.state !== "" && this.state.city !== "" && this.state.number_of_houses !== "") {
            const user = this.state

            this.props.createLandlord(user)

            this.setState({
                name: "",
                age: "",
                state: "",
                city: ""
            })

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} >
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" class="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div> <br />


                    <div>
                        <label htmlFor="age">Age: </label>
                        <input type="text" name="age" id="age" class="form-control" value={this.state.age} onChange={this.handleChange} />
                    </div><br />

                    <div>
                        <label htmlFor="state">State: </label>
                        <input type="text" name="state" id="state" class="form-control" value={this.state.state} onChange={this.handleChange} />
                    </div><br />

                    <div>
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id="city" class="form-control" value={this.state.city} onChange={this.handleChange} />
                    </div>

                    <br />
                    <br />

                    <input type="submit" value="Create Landlord" class="btn btn-primary" />



                </form>
            </div>
        )
    }
}

export default connect(null, { createLandlord })(LandlordForm)
