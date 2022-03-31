import React from 'react';
import Highcarts from 'highcharts';
const Graph: React.FC = () => {

    const options: Highcharts.Options = {
        title: {
            text: "総人口推移",
        },
        xAxis: {
            title: {
                text: "年度",
            },
        },
        yAxis: {
            title: {
                text: "人口数",
            }
        }
    }
    return(
        <div>

        </div>
    )
}