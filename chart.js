var ctx = document.getElementById("myChart");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: null,
        datasets: [{
            label: 'from 1st textarea',
            data: null,
            borderColor: [
                '#3e95cd',
            ],
            fill: false,
            borderWidth: 2
        }]
    },
});