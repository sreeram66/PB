/**
 * Created by santoshkumar on 4/7/16.
 */
$(function () {

    $('#container').highcharts({
        chart: {
            type: 'pyramid',
            marginRight: 150
        },
        title: {
            text: 'Language based tweets',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                ['no(Norwegian)',57228.15],
                ['cs(Czech)',33615.274131274135],
                ['lv(Latvian)',32920.94366197183],
                ['da(Danish)',25748.648484848483],
                ['ne(Nepali)',22981.897435897437],
                ['sv(Swedish)',20404.092485549132],
                ['fa(Persian)',19727.05],
                ['sl(Slovene)',19316.702898550724],
                ['ht(Haitian)',18676.467589220683],
                ['en(English)',15069.59382253052]

            ]
        }]
    });
});