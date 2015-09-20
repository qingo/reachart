import React from 'react'
import Coordinate from './coordinate'
import Axis from '../shape/axis'
export default class Rectangular extends Coordinate {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Axis />
        )
    }


}