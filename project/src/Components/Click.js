import React, {Component} from "react";

export class Click extends Component {
    constructor(props) {
        super(props)

        this.stare = {
            count: 0
        }
    }
    render(){
        return(
            <div>
                <button>clicked 1 time</button>
            </div>
        )
    }
}