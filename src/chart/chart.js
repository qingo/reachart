import React from 'react'
import Rectangular from '../coordinate/rectangular'
import LineSeries from '../series/line'
import Linear from '../scale/linear'

export default class Chart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <svg className="chart">
                <defs></defs>
                <g className="">
                    <g className="coordinate">
                        {this.renderCoordinate()}
                    </g>
                    <g className="series">
                        {this.renderSeries()}
                    </g>
                    <g className="legends"></g>
                    <g className="tooltip"></g>
                </g>
            </svg>
        )
    }

    renderCoordinate() {
        return (
            <Rectangular xScale={Linear} yScale={Linear}/>
        )

    }

    renderSeries() {
        return (
            <LineSeries series={this.props.series} scale={Linear}/>
        )
    }
}