import React from 'react'
export default class Arc extends React.Component{
    constructor() {
        super();
        this.state = {
            innerRadius: 0,
            outerRadius: 0
        }
    }

    render(){
        return (
            <path />
        )
    }
}