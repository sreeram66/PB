/**
 * Created by santoshkumar on 4/7/16.
 */


$(function () {
    $('#container').highcharts({
        title: {
            text: 'Popular users'
        },
        xAxis: {
            categories: ['followers_count', 'favourites_count', 'friends_count']
        },
        labels: {
            items: [{
                html: 'followers_count=value*10000',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'TwitterSports',
            data: [1339.3464,922,439]
        }, {
            type: 'column',
            name: 'juniorbachchan',
            data: [881.3451, 321, 381]
        }, {
            type: 'column',
            name: 'timesofindia',
            data: [666.2200, 236, 540]
        }]
    });
});

