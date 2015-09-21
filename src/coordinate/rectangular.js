import React from 'react'
import Coordinate from './coordinate'
import Axis from '../shape/axis'
export default class Rectangular extends Coordinate {
    constructor(props) {
        super(props);

        this.xScale = props.xScale;
        this.yScale = props.yScale;
    }

    render() {
        return (
            <g>
                <Axis className='x-axis'/>
                <Axis className='y-axis'/>
            </g>
        )
    }




}