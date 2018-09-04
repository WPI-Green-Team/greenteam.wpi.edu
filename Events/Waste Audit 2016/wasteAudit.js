google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Gordon
    drawChart([
        ['Type', 'Pounds'],
        ['Trash', 123.4],
        ['Recyclables', 17.5]
    ], 'What\'s in the trash?', 'gordon-trash');
    drawChart([
        ['Type', 'Pounds'],
        ['Trash', 15.6],
        ['Recyclables', 21.3]
    ], 'What\'s in the recycling bins?', 'gordon-recycling');

    // CC
    drawChart([
        ['Type', 'Pounds'],
        ['Trash', 476.5],
        ['Recyclables', 60]
    ], 'What\'s in the trash?', 'cc-trash');
    drawChart([
        ['Type', 'Pounds'],
        ['Trash', 27.2],
        ['Recyclables', 77.5]
    ], 'What\'s in the recycling bins?', 'cc-recycling');

    // Daniels
    drawChart([
        ['Type', 'Pounds'],
        ['Trash', 101.2],
        ['Recyclables', 19.6]
    ], 'What\'s in the trash?', 'daniels-trash');
    drawChart([
        ['Type', 'Pounds'],
        ['Trash', 26.6],
        ['Recyclables', 37.6]
    ], 'What\'s in the recycling bins?', 'daniels-recycling');
}

function drawChart(data, title, id) {

    var d = google.visualization.arrayToDataTable(data);

    var options = {
        title: title,
        slices: {
            0: {
                color: '#808488'
            },
            1: {
                color: '#0bb12b'
            }
        },
        backgroundColor: '#fafaf2'
    };

    var chart = new google.visualization.PieChart(document.getElementById(id));

    chart.draw(d, options);
}
