import React from 'react'
import LineChart from '../src/chart/line'
import data from '../mock/line-series.json'
React.render(
    <LineChart series={data}/>,
    document.body
);