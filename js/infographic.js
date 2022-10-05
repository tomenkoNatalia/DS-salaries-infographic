let pivot = new Flexmonster({
    container: "#pivot-container",
    toolbar: "true",
    width: "95%",
    height: "450px",
    componentFolder: "https://cdn.flexmonster.com/",
    licenseFilePath: "https://cdn.flexmonster.com/jsfiddle.charts.key",
    report: {
        dataSource: {
            type: "json",
            data: getJSONData()
        },
        slice: {
            columns: [
                {
                    uniqueName: "country",
                    filter: {
                        "type": "top",
                        "quantity": 5,
                        "measure": "Measures"
                    }
                },
                {
                    uniqueName: "Measures"
                }
            ],
            rows: [
                {
                    uniqueName: "job"
                },
                {
                    uniqueName: "experience"
                }
            ],
            measures: [
                {
                    uniqueName: "salary",
                    aggregation: "median"
                }
            ]
        }
    },
    reportcomplete: function() {
        pivot.off("reportcomplete");
        specializationsChartUS()
        specializationsChartWorld()
        topCountriesChart()
        lastCountriesChart()
    }
});

function setChartOptions(coloring) {
    Highcharts.setOptions({
        colors: coloring,
        chart: {
            backgroundColor: {
                color: '#161620'
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'white'
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: 'white'
                }
            }
        }
    });
}
function specializationsChartUS() {
    pivot.highcharts.getData({
        type: "bar",
        slice: {
            reportFilters: [
                {
                    uniqueName: "country",
                    filter: {
                        members: [
                            "US"
                        ]
                    }
                }
            ],
            rows: [
                {
                    uniqueName: "job",
                    sortOrder: ["Machine Learning Scientist", "Machine Learning Engineer", "Data Scientist", "Data Architect",
                        "Database Administrator", "Data Engineer", "Data Analyst", "Business Intelligence Developer"]
                }
            ],
            columns: [
                {
                    uniqueName: "Measures"
                }
            ],
            measures: [
                {
                    uniqueName: "salary",

                    aggregation: "average"
                }
            ]
        }
    },
        function(chartConfig) {
            setChartOptions([ '#ff6090', '#8667f5'])
            Highcharts.chart('column-chart-us', chartConfig);
        },
        function(chartConfig) {
            setChartOptions([ '#ff6090', '#8667f5'])
            Hightcharts.chart('column-chart-us', chartConfig);
        });
}

function specializationsChartWorld() {
    pivot.highcharts.getData({
        type: "bar",
        slice: {
            rows: [
                {
                    uniqueName: "job",
                    sortOrder: ["Machine Learning Scientist", "Machine Learning Engineer", "Data Scientist", "Data Architect",
                        "Database Administrator", "Data Engineer", "Data Analyst", "Business Intelligence Developer"]
                }
            ],
            columns: [
                {
                    uniqueName: "Measures"
                }
            ],
            measures: [
                {
                    uniqueName: "salary",

                    aggregation: "average"
                }
            ]
        }
    },
        function(chartConfig) {
            setChartOptions(['#055ce8', '#ff6090', '#8667f5'], "Globally")
            Highcharts.chart('column-chart-world', chartConfig);
        },
        function(chartConfig) {
            setChartOptions(['#055ce8', '#ff6090', '#8667f5'], "Globally")
            Hightcharts.chart('column-chart-world', chartConfig);
        });
}

function topCountriesChart() {
    pivot.highcharts.getData({
            type: "line",
            slice: {
                rows: [
                    {
                        uniqueName: "country",
                        filter: {
                            "type": "top",
                            "quantity": 5,
                            "measure": "salary"
                        },
                        sortOrder: ["Canada", "Israel", "Germany", "Australia", "US"]
                    },
                ],
                columns: [
                    {
                        uniqueName: "Measures"
                    }
                ],
                measures: [
                    {
                        uniqueName: "salary",

                        aggregation: "average"
                    }
                ]
            }
        },
        function(chartConfig) {
            setChartOptions(['#ff6090'], "Top 5")
            Highcharts.chart('top-countries', chartConfig);
        },
        function(chartConfig) {
            setChartOptions(['#ff6090'], "Top 5")
            Hightcharts.chart('top-countries', chartConfig);
        });
}

function lastCountriesChart() {
    pivot.highcharts.getData({
            type: "line",
            slice: {
                rows: [
                    {
                        uniqueName: "country",
                        filter: {
                            "type": "bottom",
                            "quantity": 5,
                            "measure": "salary"
                        },
                        sortOrder: ["Russia", "India", "Ukraine", "Philippines",  "Turkey"]
                    },
                ],
                columns: [
                    {
                        uniqueName: "Measures"
                    }
                ],
                measures: [
                    {
                        uniqueName: "salary",

                        aggregation: "average"
                    }
                ]
            }
        },
        function(chartConfig) {
            setChartOptions(['#ff6090'], 'Bottom 5')
            Highcharts.chart('last-countries', chartConfig);
        },
        function(chartConfig) {
            setChartOptions(['#ff6090'], 'Bottom 5')
            Hightcharts.chart('last-countries', chartConfig);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('experience-job', {
        chart: {
            type: 'areaspline',
            backgroundColor: {
                color: '#161620'
            }
        },
        title: {
            text: 'for different jobs',
            style: {
                color: '#FFFFFF'
            }
        },
        colors: ['#7302f2', '#ff6090', '#055ce8'],
        xAxis: {
            categories: ["Machine Learning Scientist", "Machine Learning Engineer", "Data Scientist", "Data Architect",
                "Database Administrator", "Data Engineer", "Data Analyst", "Business Intelligence Developer"],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Median Salary'
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'white'
            }
        },
        series: [{
            name: 'Senior',
            data: [161000, 152000, 147000, 137000, 134000, 131000, 121000, 119000]
        }, {
            name: 'Middle',
            data: [130000, 122000, 119000, 110000, 108000, 106000, 98000, 96000]
        },{
            name: 'Entry-level',
            data: [91000, 86000, 83000, 77000, 75695, 74000, 69000, 68000]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('salary-progression', {
        chart: {
            backgroundColor: {
                color: '#161620'
            }
        },
        colors: ['#7302f2', '#ff6090', '#055ce8'],
        title: {
            text: 'Progression',
            style: {
                color: '#FFFFFF'
            }
        },
        xAxis: {
            categories: ['<1yr', '1-4yrs', '5-9yrs', '10-19yrs', '20+yrs'],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Salary'
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'white'
            }
        },
        series: [{
            type: 'area',
            name: 'Payscale',
            data: [86000, 96000, 111000, 123000, 136000]
        },{
            type: 'line',
            name: 'Salary Expert',
            data: [83000, 101000, 119000, 133000, 147000]
        },{
            type: 'line',
            name: 'Glassdoor',
            data: [90000, 105000, 121000, 147000, 174000]
        }]
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('industries', {
        chart: {
            type: 'bar',
            marginLeft: 250,
            backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(30, 30, 17)'],
                [1, 'rgb(30, 30, 60)']
                ],
            }
        },
        colors: ['#055ce8', '#ff6090', '#7302f2'],
        title: {
            text: '',
            style: {
                color: '#FFFFFF'
            }
        },
        xAxis: {
            categories: ['Computers/hardware', 'Cloud services/hosting/CDN', 'Security(computer/software)', 'Software', 'Carriers/telecommunications', 'Retail/ecommerce',
                'Banking/investment/finance', 'Consulting(non-IT)', 'Advertising/marketing/PR', 'Consulting(IT)', 'Healthcare', 'Fashion', 'Insurance', 'Manufacturing',
                'Other', 'Government', 'Education'],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Salary'
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'white'
            }
        },
        series: [{
            name: 'Salary',
            data: [171000, 169000, 165000, 164000, 155000, 154000, 151000, 150000, 149000, 149000, 148000, 145000, 137000, 136000, 134000, 128000, 105000]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('gender', {
        chart: {
            type: 'column',
            backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(30, 30, 17)'],
                [1, 'rgb(30, 30, 60)']
                ],
            }
        },
        colors: ['#7302f2', '#ff6090', '#055ce8'],
        title: {
            text: '',
            style: {
                color: '#FFFFFF'
            }
        },
        xAxis: {
            categories: ['Executive', 'Director', 'Manager'],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Salary'
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        legend: {
            itemStyle: {
                font: '9pt Trebuchet MS, Verdana, sans-serif',
                color: 'white'
            }
        },
        series: [{
            name: 'Men',
            data: [205000, 184000, 154000]
        },{
            name: 'Women',
            data: [163000, 180000, 143000]
        }]
    });
});



function getJSONData() {
    return [
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "17883"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Australia",
                "salary": "81188"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "21603"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Canada",
                "salary": "74196"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "China",
                "salary": "36396"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "74447"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": " France ",
                "salary": "74580"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Germany",
                "salary": "83333"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "India",
                "salary": "14765"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Israel",
                "salary": "59103"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Italy",
                "salary": "65190"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Japan",
                "salary": "63573"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "16671"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "12844"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Poland",
                "salary": "30867"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Russia",
                "salary": "15657"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "26082"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "46511"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "49353"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "9196"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "11910"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "60051"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": " UK ",
                "salary": "67796"
            },
            {
                "job": "Data Scientist",
                "experience": "Junior",
                "country": "US",
                "salary": "83478"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "24648"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Australia",
                "salary": "115305"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "30492"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Canada",
                "salary": "105547"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "China",
                "salary": "51223"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "106095"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": " France ",
                "salary": "106156"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Germany",
                "salary": "118543"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "India",
                "salary": "20685"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Israel",
                "salary": "84053"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Italy",
                "salary": "92816"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Japan",
                "salary": "90570"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "23619"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "18115"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Poland",
                "salary": "43897"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Russia",
                "salary": "22035"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "36786"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "65824"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "70332"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "12945"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "16671"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "85003"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": " UK ",
                "salary": "96442"
            },
            {
                "job": "Data Scientist",
                "experience": "Middle",
                "country": "US",
                "salary": "118751"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "31574"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Australia",
                "salary": "143342"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "38141"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Canada",
                "salary": "130998"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "China",
                "salary": "64259"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "131441"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": " France ",
                "salary": "131677"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Germany",
                "salary": "147128"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "India",
                "salary": "26068"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Israel",
                "salary": "104350"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Italy",
                "salary": "115097"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Japan",
                "salary": "112242"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "29433"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "22677"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Poland",
                "salary": "54497"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Russia",
                "salary": "27651"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "46049"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "82118"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "87135"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "16236"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "21028"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "106023"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": " UK ",
                "salary": "119698"
            },
            {
                "job": "Data Scientist",
                "experience": "Senior",
                "country": "US",
                "salary": "147385"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "14723"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Australia",
                "salary": "66799"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "17773"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Canada",
                "salary": "61046"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "China",
                "salary": "29947"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "61252"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": " France ",
                "salary": "61361"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Germany",
                "salary": "68480"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "India",
                "salary": "12149"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Israel",
                "salary": "48628"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Italy",
                "salary": "53635"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Japan",
                "salary": "52305"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "13716"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "10568"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Poland",
                "salary": "25397"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Russia",
                "salary": "12883"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "37803"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "38269"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "40605"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "7567"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "9800"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "49409"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": " UK ",
                "salary": "55779"
            },
            {
                "job": "Data Analyst",
                "experience": "Junior",
                "country": "US",
                "salary": "68699"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "20262"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Australia",
                "salary": "94733"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "25051"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Canada",
                "salary": "86715"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "China",
                "salary": "42086"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "87164"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": " France ",
                "salary": "87215"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Germany",
                "salary": "97392"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "India",
                "salary": "16996"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Israel",
                "salary": "69056"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Italy",
                "salary": "76256"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Japan",
                "salary": "74409"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "19404"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "14884"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Poland",
                "salary": "36065"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Russia",
                "salary": "18104"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "30224"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "54081"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "57783"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "10636"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "13698"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "69838"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": " UK ",
                "salary": "79234"
            },
            {
                "job": "Data Analyst",
                "experience": "Middle",
                "country": "US",
                "salary": "97586"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "25935"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Australia",
                "salary": "117670"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "31309"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Canada",
                "salary": "107536"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "China",
                "salary": "52738"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "107899"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": " France ",
                "salary": "108094"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Germany",
                "salary": "120778"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "India",
                "salary": "21402"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Israel",
                "salary": "85662"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Italy",
                "salary": "94482"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Japan",
                "salary": "92139"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "24161"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "18617"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Poland",
                "salary": "19956"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Russia",
                "salary": "22694"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "21460"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "67413"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "71529"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "13330"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "17264"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "87037"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": " UK ",
                "salary": "98260"
            },
            {
                "job": "Data Analyst",
                "experience": "Senior",
                "country": "US",
                "salary": "121018"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "15923"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Australia",
                "salary": "72244"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "19224"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Canada",
                "salary": "66022"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "China",
                "salary": "32388"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "66245"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": " France ",
                "salary": "66364"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Germany",
                "salary": "74152"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "India",
                "salary": "13140"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Israel",
                "salary": "52589"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Italy",
                "salary": "58007"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Japan",
                "salary": "56569"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "14834"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "11430"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Poland",
                "salary": "27467"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Russia",
                "salary": "13933"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "23210"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "41388"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "43915"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "8184"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "10599"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "53436"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": " UK ",
                "salary": "60327"
            },
            {
                "job": "Data Engineer",
                "experience": "Junior",
                "country": "US",
                "salary": "74300"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "21946"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Australia",
                "salary": "102604"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "27314"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Canada",
                "salary": "93919"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "China",
                "salary": "29849"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "94406"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": " France ",
                "salary": "94460"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Germany",
                "salary": "105483"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "India",
                "salary": "18408"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Israel",
                "salary": "74794"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Italy",
                "salary": "82591"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Japan",
                "salary": "80592"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "21016"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "16120"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Poland",
                "salary": "39062"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Russia",
                "salary": "19609"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "32735"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "58574"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "62584"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "11520"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "14836"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "75641"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": " UK ",
                "salary": "85817"
            },
            {
                "job": "Data Engineer",
                "experience": "Middle",
                "country": "US",
                "salary": "105694"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "28112"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Australia",
                "salary": "127552"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "33941"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Canada",
                "salary": "116566"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "China",
                "salary": "57184"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "116960"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": " France ",
                "salary": "117170"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Germany",
                "salary": "130919"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "India",
                "salary": "23199"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Israel",
                "salary": "92855"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Italy",
                "salary": "102417"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Japan",
                "salary": "99876"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "26190"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "20180"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Poland",
                "salary": "48494"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Russia",
                "salary": "24599"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "40978"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "73074"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "77535"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "14449"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "18714"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "94345"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": " UK ",
                "salary": "106512"
            },
            {
                "job": "Data Engineer",
                "experience": "Senior",
                "country": "US",
                "salary": "131181"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "17553"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Australia",
                "salary": "73157"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "21038"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Canada",
                "salary": "68108"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "China",
                "salary": "39370"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "62204"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": " France ",
                "salary": "60168"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Germany",
                "salary": "69288"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "India",
                "salary": "14586"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Israel",
                "salary": "54902"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Italy",
                "salary": "52259"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Japan",
                "salary": "58971"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "17342"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "10443"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Poland",
                "salary": "28571"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Russia",
                "salary": "14863"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "26861"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "41192"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "46670"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "8570"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "15171"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "62403"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": " UK ",
                "salary": "59493"
            },
            {
                "job": "Data Architect",
                "experience": "Junior",
                "country": "US",
                "salary": "77079"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "24299"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Australia",
                "salary": "104352"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "29823"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Canada",
                "salary": "97309"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "China",
                "salary": "39758"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "89033"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": " France ",
                "salary": "86015"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Germany",
                "salary": "98995"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "India",
                "salary": "20524"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Israel",
                "salary": "78419"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Italy",
                "salary": "74729"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Japan",
                "salary": "84380"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "24677"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "14794"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Poland",
                "salary": "40760"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Russia",
                "salary": "21010"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "38050"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "58550"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "66799"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "12116"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "21328"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "88718"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": " UK ",
                "salary": "84999"
            },
            {
                "job": "Data Architect",
                "experience": "Middle",
                "country": "US",
                "salary": "110127"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "31152"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Australia",
                "salary": "129832"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "37336"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Canada",
                "salary": "120871"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "China",
                "salary": "69869"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "110394"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": " France ",
                "salary": "106781"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Germany",
                "salary": "122966"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "India",
                "salary": "25887"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Israel",
                "salary": "97436"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Italy",
                "salary": "92745"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Japan",
                "salary": "104656"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "30777"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "18534"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Poland",
                "salary": "50705"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Russia",
                "salary": "26378"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "47671"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "73104"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "82826"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "15210"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "26924"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "110747"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": " UK ",
                "salary": "105582"
            },
            {
                "job": "Data Architect",
                "experience": "Senior",
                "country": "US",
                "salary": "136794"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "20858"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Australia",
                "salary": "80886"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "25423"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Canada",
                "salary": "74960"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "China",
                "salary": "45325"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "69236"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": " France ",
                "salary": "62737"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Germany",
                "salary": "77749"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "India",
                "salary": "16845"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Israel",
                "salary": "62512"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Italy",
                "salary": "55139"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Japan",
                "salary": "68982"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "20745"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "10451"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Poland",
                "salary": "33198"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Russia",
                "salary": "16390"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "42271"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "44983"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "51951"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "9333"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "18790"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "65737"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": " UK ",
                "salary": "67562"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Junior",
                "country": "US",
                "salary": "90782"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "28873"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Australia",
                "salary": "115378"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "36040"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Canada",
                "salary": "107098"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "China",
                "salary": "64068"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "99098"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": " France ",
                "salary": "89687"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Germany",
                "salary": "111083"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "India",
                "salary": "23702"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Israel",
                "salary": "89289"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Italy",
                "salary": "78524"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Japan",
                "salary": "98703"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "29520"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "14804"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Poland",
                "salary": "47419"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Russia",
                "salary": "23167"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "59880"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "72351"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "73287"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "13195"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "26421"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "93342"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": " UK ",
                "salary": "96528"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Middle",
                "country": "US",
                "salary": "129704"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "37016"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Australia",
                "salary": "143550"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "45118"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Canada",
                "salary": "133032"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "China",
                "salary": "80439"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "122873"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": " France ",
                "salary": "111340"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Germany",
                "salary": "137981"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "India",
                "salary": "29896"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Israel",
                "salary": "110941"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Italy",
                "salary": "97453"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Japan",
                "salary": "122422"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "36817"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "18723"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Poland",
                "salary": "58918"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Russia",
                "salary": "29087"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "75020"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "79833"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "90870"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "16563"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "33354"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "116519"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": " UK ",
                "salary": "119901"
            },
            {
                "job": "Machine Learning Scientist",
                "experience": "Senior",
                "country": "US",
                "salary": "161112"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "19660"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Australia",
                "salary": "76242"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "23963"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Canada",
                "salary": "70656"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "China",
                "salary": "42723"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "65260"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": " France ",
                "salary": "59134"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Germany",
                "salary": "73285"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "India",
                "salary": "15878"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Israel",
                "salary": "58332"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Italy",
                "salary": "51758"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Japan",
                "salary": "65021"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "19554"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "9851"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Poland",
                "salary": "31292"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Russia",
                "salary": "15449"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "39844"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "42401"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "48262"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "8797"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "17715"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "61885"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": " UK ",
                "salary": "63682"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Junior",
                "country": "US",
                "salary": "85569"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "27215"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Australia",
                "salary": "108753"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "33971"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Canada",
                "salary": "100949"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "China",
                "salary": "60389"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "93408"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": " France ",
                "salary": "84537"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Germany",
                "salary": "104704"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "India",
                "salary": "22341"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Israel",
                "salary": "84162"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Italy",
                "salary": "74015"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Japan",
                "salary": "93036"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "27825"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "13954"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Poland",
                "salary": "44696"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Russia",
                "salary": "21837"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "56441"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "60242"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "69079"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "12437"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "24904"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "87985"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": " UK ",
                "salary": "90985"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Middle",
                "country": "US",
                "salary": "122257"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "34891"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Australia",
                "salary": "135307"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "42527"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Canada",
                "salary": "125393"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "China",
                "salary": "75820"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "115818"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": " France ",
                "salary": "104947"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Germany",
                "salary": "130059"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "India",
                "salary": "28179"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Israel",
                "salary": "104571"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Italy",
                "salary": "91857"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Japan",
                "salary": "115393"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "34703"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "17482"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Poland",
                "salary": "55535"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Russia",
                "salary": "27417"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "70712"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "75249"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "85653"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "15612"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "31439"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "109828"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": " UK ",
                "salary": "113016"
            },
            {
                "job": "Machine Learning Engineer",
                "experience": "Senior",
                "country": "US",
                "salary": "151861"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "15473"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Australia",
                "salary": "64450"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "18534"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Canada",
                "salary": "60001"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "China",
                "salary": "34686"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "54800"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": " France ",
                "salary": "53006"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Germany",
                "salary": "61041"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "India",
                "salary": "12851"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Israel",
                "salary": "48368"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Italy",
                "salary": "46038"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Japan",
                "salary": "51951"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "15 278"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "9201"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Poland",
                "salary": "25171"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Russia",
                "salary": "13095"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "23665"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "36290"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "41115"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "7949"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "13367"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "54977"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": " UK ",
                "salary": "52411"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Junior",
                "country": "US",
                "salary": "67905"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "21203"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Australia",
                "salary": "91007"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "26010"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Canada",
                "salary": "84862"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "China",
                "salary": "48535"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "77646"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": " France ",
                "salary": "75013"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Germany",
                "salary": "86333"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "India",
                "salary": "17900"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Israel",
                "salary": "68390"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Italy",
                "salary": "65172"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Japan",
                "salary": "73587"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "21522"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "12902"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Poland",
                "salary": "35591"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Russia",
                "salary": "18324"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "33185"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "51063"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "58255"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "10568"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "18602"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "77373"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": " UK ",
                "salary": "74127"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Middle",
                "country": "US",
                "salary": "96042"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "27117"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Australia",
                "salary": "112950"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "32482"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Canada",
                "salary": "105153"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "China",
                "salary": "60834"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "96037"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": " France ",
                "salary": "92895"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Germany",
                "salary": "106976"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "India",
                "salary": "22522"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Israel",
                "salary": "84765"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Italy",
                "salary": "80684"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Japan",
                "salary": "91046"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "26776"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "16130"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Poland",
                "salary": "44113"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Russia",
                "salary": "22949"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "41473"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "63599"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "72054"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "13233"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "23426"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "96348"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": " UK ",
                "salary": "91851"
            },
            {
                "job": "Business Intelligence Developer",
                "experience": "Senior",
                "country": "US",
                "salary": "119005"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": " Argentina ",
                "salary": "17248"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Australia",
                "salary": "71843"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": " Brazil ",
                "salary": "20660"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Canada",
                "salary": "66884"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "China",
                "salary": "38665"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": " Finland ",
                "salary": "61086"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": " France ",
                "salary": "59087"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Germany",
                "salary": "68044"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "India",
                "salary": "14352"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Israel",
                "salary": "53916"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Italy",
                "salary": "51661"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Japan",
                "salary": "57911"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": " Mexico ",
                "salary": "17031"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Philippines",
                "salary": "10256"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Poland",
                "salary": "28058"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Russia",
                "salary": "14599"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "South Africa",
                "salary": "26380"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "South Korea",
                "salary": "40453"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": " Spain ",
                "salary": "45831"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Turkey",
                "salary": "8417"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "Ukraine",
                "salary": "14901"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "United Arab Emirates",
                "salary": "61284"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": " UK ",
                "salary": "58451"
            },
            {
                "job": "Database Administrator",
                "experience": "Junior",
                "country": "US",
                "salary": "75695"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": " Argentina ",
                "salary": "23842"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Australia",
                "salary": "102330"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": " Brazil ",
                "salary": "29246"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Canada",
                "salary": "95422"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "China",
                "salary": "54574"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": " Finland ",
                "salary": "87307"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": " France ",
                "salary": "84348"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Germany",
                "salary": "97076"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "India",
                "salary": "20128"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Israel",
                "salary": "76899"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Italy",
                "salary": "73280"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Japan",
                "salary": "82743"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": " Mexico ",
                "salary": "24200"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Philippines",
                "salary": "14507"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Poland",
                "salary": "40019"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Russia",
                "salary": "20603"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "South Africa",
                "salary": "37314"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "South Korea",
                "salary": "57416"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": " Spain ",
                "salary": "65504"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Turkey",
                "salary": "11883"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "Ukraine",
                "salary": "20917"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "United Arab Emirates",
                "salary": "87000"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": " UK ",
                "salary": "83350"
            },
            {
                "job": "Database Administrator",
                "experience": "Middle",
                "country": "US",
                "salary": "107992"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": " Argentina ",
                "salary": "30541"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Australia",
                "salary": "127212"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": " Brazil ",
                "salary": "36583"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Canada",
                "salary": "118430"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "China",
                "salary": "68463"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": " Finland ",
                "salary": "108164"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": " France ",
                "salary": "104625"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Germany",
                "salary": "120483"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "India",
                "salary": "25366"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Israel",
                "salary": "95469"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Italy",
                "salary": "90871"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Japan",
                "salary": "102543"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": " Mexico ",
                "salary": "30157"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Philippines",
                "salary": "18161"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Poland",
                "salary": "49683"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Russia",
                "salary": "25847"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "South Africa",
                "salary": "46710"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "South Korea",
                "salary": "71630"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": " Spain ",
                "salary": "81153"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Turkey",
                "salary": "14904"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "Ukraine",
                "salary": "26384"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "United Arab Emirates",
                "salary": "108514"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": " UK ",
                "salary": "103449"
            },
            {
                "job": "Database Administrator",
                "experience": "Senior",
                "country": "US",
                "salary": "134032"
            }
    ]
}