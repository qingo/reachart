import React from 'react'
export default class Series extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            scale: 'Linear',
            shape: 'Line',
            coordinate: ''
        }
    }
}