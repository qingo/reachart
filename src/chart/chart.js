import React from 'react'
import Rectangular from '../coordinate/rectangular'
import LineSeries from '../series/line'
import Linear from '../scale/linear'
import '../less/chart.less'

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dimensions: props.series.dimensions,
            measures: props.series.measures
        }
    }

    render() {
        return (
            <svg className="chart">
                <defs></defs>
                <g className="">
                    <g className="coordinate">
                        {this.renderCoordinate()}
                    </g>
                    <g className="series"  transform="matrix(1,0,0,-1,0,420)">
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
            <Rectangular dimensions={this.state.dimensions} measures={this.state.measures}/>
        )

    }

    renderSeries() {
        return (
            <LineSeries segments={this.toPoints()}/>
        )
    }

    toPoints() {
        var rst = [];
        this.props.series.dimensions.forEach((dimension, index)=>
                rst.push({
                    x: new Linear({
                        range: [0, 1000],
                        domain: [0, 40]
                    }).toPixel(index),
                    y: new Linear({
                        domain: [0,10000],
                        range: [0, 500]
                    }).toPixel(this.props.series.measures[index])
                })
        );
        return rst;
    }
}