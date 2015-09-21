import React from 'react'
export default class Line extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <path d={this.join()}/>
        )
    }

    join() {
        var rst = [];
        this.props.segments.forEach(segment => rst.push(`${segment.x} ${segment.y}`));
        return `M ${rst.join(' L ')}`
    }
}