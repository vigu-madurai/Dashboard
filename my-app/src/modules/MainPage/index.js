import React from 'react';
import './index.css';

export default class MainPage extends React.Component {
    
    render() {
        return(
            <div className='dashboard-container'>
                <div className='input-container'>Input</div>
                <div className='output-container'>
                    <div className='graph-container'>
                        Graph
                    </div>
                    <div className='table-container'>
                        Table
                    </div>
                </div>
            </div>
        )
    }
}