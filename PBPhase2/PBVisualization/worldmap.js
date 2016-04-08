google.charts.load('current', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['Country', 'users in this location'],
        ['Switzerland', 22],
        ['Nepal', 16],
        ['Pakistan', 28],
        ['Chile', 6],
        ['Malaysia', 22],
        ['UAE', 28],
        ['Thailand', 22],
        ['Vietnam', 4],
        ['South Africa', 1]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}/**
 * Created by santoshkumar on 4/7/16.
 */
