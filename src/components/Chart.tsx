import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options: object = {
    chart: {
        type: 'spline',
        height: 400
    },
    title: {
        text: 'Spline Chart'
    },
    series: [{
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }],
    accessibility: {
        enabled: false
    }
}
export interface ChartProps {
    text?: string
}
const Chart = (props: ChartProps) => {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
}

export default Chart;