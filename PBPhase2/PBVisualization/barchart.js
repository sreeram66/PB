$(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Popular player from India'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'Player'
        },
        yAxis: {
            title: {
                text: 'No of tweets on him'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Dhoni',
                y: 3863

            }, {
                name: 'Kholi',
                y: 17797

            },
                {
                    name: 'Ashwin',
                    y: 614

                }]
        }]
    });
});