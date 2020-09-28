// View Models for Reports Component.
export class ChartsConfig {
    public static donutChartOptions = {
        chart: {
            type: 'pieChart',
            height: 400,
            donut: true,
            x: function (d) { return d.key; },
            y: function (d) { return d.y; },
            labelsOutside: true,
            labelType: function (d) {
                return d3.format(',f')(d.value);
            },
            showLabels: true,
            pie: {
                startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2 },
                endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2 }
            },
            color: ['#F47324', '#FF0000', '#A8ABAF'],
            duration: 500,
            legend: {
                margin: {
                    top: 5,
                    right: 0,
                    bottom: 5,
                    left: 0
                },
                vers: 'furious'
            }
        }
    };
    public static multiBarChartOptions = {
        chart: {
            type: "multiBarChart",
            height: 250,
            margin: {
                top: 40,
                right: 0,
                bottom: 45,
                left: 40
            },
            useInteractiveGuideline: true,
            clipEdge: false,
            duration: 500,
            stacked: false,
            showControls: false,
            xAxis: {
                axisLabel: "Month",
                axisLabelDistance: 2,
                tickFormat: function (d) {
                    return d3.time.format('%b - %Y')(new Date(d));
                },
                tickPadding: 12
            },
            yAxis: {
                axisLabel: "No. of Alchohol Tests",
                axisLabelDistance: -20,
                tickFormat: function (d) {
                    return d3.format(',f')(d);
                }
            },
            legend: {
                margin: {
                    top: 5,
                    right: 0,
                    bottom: 5,
                    left: 0
                },
                rightAlign: true,
                vers: 'furious'
            }
        }
    }
    public static completionChartOptions = {
        chart: {
            type: 'pieChart',
            height: 250,
            margin: {
                top: -5,
                right: 20,
                bottom: 45,
                left: 45
            },
            donut: true,
            x: function (d) { return d.key; },
            y: function (d) { return d.y; },
            showLabels: false,
            showLegend: false,
            color: ['#006600', '#A8ABAF'],
            duration: 500,
            growOnHover: false,
            title: '86%'
        }
    };
    public static completionChartData = [
        {
            "key": "completed",
            "y": 86
        },
        {
            "key": "remaining",
            "y": 14
        }
    ];
    public static multiBarChartData = [
        {
            "key": "Selected",
            "color": "#1F77B4",
            "values": [
                {
                    "x": "05/01/2020",
                    "y": 75
                },
                {
                    "x": "06/01/2020",
                    "y": 64
                },
                {
                    "x": "07/01/2020",
                    "y": 72
                }
            ]
        },
        {
            "key": "Completed",
            "color": "#F47324",
            "values": [
                {
                    "x": "05/01/2020",
                    "y": 68
                },
                {
                    "x": "06/01/2020",
                    "y": 60
                },
                {
                    "x": "07/01/2020",
                    "y": 67
                }
            ]
        },
        {
            "key": "Positive",
            "color": "#FF0000",
            "values": [
                {
                    "x": "05/01/2020",
                    "y": 2
                },
                {
                    "x": "06/01/2020",
                    "y": 4
                },
                {
                    "x": "07/01/2020",
                    "y": 2
                }
            ]
        }
    ];
}