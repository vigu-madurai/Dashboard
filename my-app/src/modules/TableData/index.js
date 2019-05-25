import React from 'react';
import './index.css';

export default class TableData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            data: this.props.data,
            dataPerPage: 5
        }
    }

    renderPagination = () => {
        let pageNo = [];
        for(let page = 0 ; page < this.props.data.length / this.state.dataPerPage; page++) {
            pageNo.push(page+1);
        }
        return(
            <div className='pagination-wrapper'>
                <span className='page-no-title'>Page No: </span>
                {pageNo.map((page, index) => {
                    return( 
                        <span 
                            className={`page-no ${this.state.currentPage === index ? 'current-page': ''}` }
                            key={page} 
                            onClick={()=>{this.setState({currentPage: page-1})}}
                        >
                            {page}
                        </span>
                    )})
                }
            </div>
        )
    }

    render() {
        let data = this.props.data; 
        data = data.slice(this.state.currentPage, this.state.currentPage+this.state.dataPerPage);
        return(
            <div className='table-data-container'>
                <table className='table-wrapper'>
                    <tr>
                        <th className='heading'>Game</th>
                        <th className='heading'>Revenue</th> 
                        <th className='heading'>Impressions</th>
                    </tr>
                    {data.map((el, index) => {
                        return(
                            <tr key={index}>
                                <td className='column'>{el.game}</td>
                                <td className='column'>{el.revenue}</td>
                                <td className='column'>{el.impressions}</td>
                            </tr>
                        )
                    })} 
                </table>
                {this.renderPagination()}
            </div>
        )
    }            
}
