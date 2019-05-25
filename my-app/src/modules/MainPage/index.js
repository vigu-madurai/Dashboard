import React from 'react';
import './index.css';
import GraphData from '../GraphData/index.js'
import TableData from '../TableData/index.js'
export default class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date().toISOString().split("T")[0],
            isOnline: navigator.onLine
        }
    }
    
    componentDidMount() {
        fetch('https://www.mocky.io/v2/5cd04a20320000442200fc10')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }
    
    computeDataForSelectedDate = () => {
        const { date, data} = this.state;
        let computedData = data.filter(d => {
            return( d.timestamp === date)
        })
        return computedData;
    }

    renderNoDataFound = () => {
        return(
            <div className='error-container'>
                <span className='error-container-text'>No data found for the selected date.</span>
                <span className='error-container-text'>Please try again!!</span>
            </div>
        )
    }

    render() {
        console.log(this.state.isOnline);
        return(
            <div className='dashboard-container'>
                <div className='header'>
                    <span className='logo'/>
                    <span className='title'/>
                </div>

                <div className='body-container'>
                    <div className='body-wrapper'>
                        <div className='input-container'>
                            Select a date: 
                                <input 
                                    type="date" 
                                    className='date-container'
                                    name="trip-start"
                                    value={this.state.date}
                                    max={new Date().toISOString().split("T")[0]}
                                    onChange={(event) => {this.setState({date: event.target.value})}}
                                    >
                                    </input>
                        </div>
                        <div className='output-container'>
                            <div className='graph-container'>
                                {this.state.data && ( 
                                    this.computeDataForSelectedDate().length ? 
                                        <GraphData data={this.computeDataForSelectedDate()} selectedDate={this.state.date} />
                                        :
                                        this.renderNoDataFound()
                                )}
                            </div>
                            <div className='table-container'>
                                {this.state.data && ( 
                                    this.computeDataForSelectedDate().length ? 
                                        <TableData data={this.computeDataForSelectedDate()} />
                                        :
                                        this.renderNoDataFound()
                                )}
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}