import React from 'react'
import Series from './series'
import Line from '../shape/line'
export default class LineSeries extends Series {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <g className="line-series">
                <Line segments={this.props.segments}/>
            </g>
        )
    }
}