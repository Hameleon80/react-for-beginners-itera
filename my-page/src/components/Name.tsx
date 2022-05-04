import { Component } from "react";

type NameType = ({ name: string })

export class Name extends Component<NameType>{
    render() {
        return (
            <div style={{ color: "darkgrey" }}>
                <h2>
                    <i style={{ color: "cornflowerblue" }}>Name:</i>
                    <div style={{paddingLeft:"20px"}}>{this.props.name}</div>
                </h2>
            </div>
        )
    }
}