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
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" placeholder="Name" class="form-control" value={this.state.name} onChange={this.handleChange} />
                    </div> <br />


                    <div>
                        <label htmlFor="age"></label>
                        <input type="text" name="age" id="age" placeholder="Age" class="form-control" value={this.state.age} onChange={this.handleChange} />
                    </div><br />

                    <div>
                        <label htmlFor="state"></label>
                        <input type="text" name="state" id="state" placeholder="State" class="form-control" value={this.state.state} onChange={this.handleChange} />
                    </div><br />

                    <div>
                        <label htmlFor="city"></label>
                        <input type="text" name="city" id="city" placeholder="City" class="form-control" value={this.state.city} onChange={this.handleChange} />
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
