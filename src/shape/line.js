import React from 'react'
export default class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            d: []

        }
    }

    render() {
        console.log(this.props.segments);
        return (
            <path d={'M'}/>
        )
    }

    segment() {

    }
}