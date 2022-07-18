import React, { Component } from "react";

class AllowNumbers extends Component {
    constructor() {
        super();
        this.state = { value : ''};
    }

    textNum(e) {
        this.setState({ inputvalue : e.target.value.replace(/\D/g, '') });
    }

    render() {
        return (
            
            <div className="form-group-nobtn">
                <label>
                    Phone Number:
                 <input type = "text" value={this.state.inputvalue} onChange={this.textNum.bind(this)} placeholder="Enter only Numbers" />
                </label>
            </div>
        )
    }
}

export default AllowNumbers;