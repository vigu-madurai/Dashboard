import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class GraphData extends React.Component {
    
    render() {    
        const {data, selectedDate} = this.props;
        let series = data.map(el => {
            return ({
                name: el.game, 
                y: (el.revenue/el.impressions) * 1000,
                drilldown: el.game
            })
        });
        const options = {
            chart: {
              type: 'column'
            },
            title: {
              text: 'eCPM Chart for the Games Played on ' + selectedDate
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Date: ' + selectedDate
                }
            },
            legend: {
                enabled: false
              },
            yAxis: {
                title: {
                  text: 'eCPM (Estimated Cost Per Mile)'
                }
              },
              series: [
                {
                  name: "Game",
                  colorByPoint: true,
                  data: series
                }
            ],
            
        };

        return(
            <div className='graph-data-container'>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )
    }        
}