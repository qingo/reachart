import React from 'react'
import Series from './series'
import Line from '../shape/line'
export default class LineSeries extends Series {
    constructor(props) {
        super(props);
        this.state = {
            segments: new this.props.scale().toPixel(props.series)
        }
    }

    render() {
        return (
            <g className="line-series">
                <Line segments={this.state.segments}/>
            </g>
        )
    }
}