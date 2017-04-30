(function () {
    angular.module("chartsApp", ['ng-fusioncharts', 'ui.grid']).directive("convertTable", function () {
        return {
            link: function (scope, element, attrs) {
                scope.pctFormat = function (value, data, cell, row, options) { //plain text value
                    return value + "%";
                };
                //############# column configuration for page 7 big table#################
                $(element).tabulator({
                    fitColumns: true
                    , columns: [{
                            title: "id"
                            , field: "id"
                            , align: "right"
                            , sorter: "number"
                    }, {
                            title: "brand"
                            , field: "name"
                    }, {
                            title: "percentage"
                            , field: "pct"
                            , align: "center"
                            , formatter: "progress"
                    }, {
                            title: "percentage"
                            , field: "pct"
                            , align: "center"
                            , formatter: scope.pctFormat
                    }, {
                            title: "count"
                            , field: "count"
                    }
                        , {
                            title: "nb"
                            , field: "count"
                        }]
                , })
                $(element).tabulator("setData", attrs.convertTable);
            }
        }
    }).directive("convertTable2", function () {
        return {
            link: function (scope, element, attrs) {
                scope.pctFormat = function (value, data, cell, row, options) { //plain text value
                    return value + "%";
                };
                //########## column configuration for page 4 big table####################
                $(element).tabulator({
                    fitColumns: true
                    , columns: [{
                            title: "brand"
                            , field: "name"
                    }, {
                            title: "percentage"
                            , field: "pct"
                            , align: "center"
                            , formatter: "progress"
                    }, {
                            title: "percentage"
                            , field: "pct"
                            , align: "center"
                            , formatter: scope.pctFormat
                    }, {
                            title: "count"
                            , field: "count"
                    }
                        , {
                            title: "nb"
                            , field: "count"
                        }]
                , })
                $(element).tabulator("setData", attrs.convertTable2);
            }
        }
    }).service("dataService", function ($http) {
        //############### MEthod to get ajax data for provided URL############
        this.getData = function (url) {
            return $http.get(url)
        }
        this.lineChartConfig = function () {
            //############### line chart config################
            return {
                "chart": {
                    "caption": ""
                    , "subcaption": ""
                    , "linethickness": "1"
                    , "showvalues": "0"
                    , "formatnumberscale": "0"
                    , "anchorradius": "2"
                    , "divlinecolor": "666666"
                    , "divlinealpha": "30"
                    , "divlineisdashed": "1"
                    , "labelstep": "2"
                    , "bgcolor": "FFFFFF"
                    , "showalternatehgridcolor": "0"
                    , "labelpadding": "10"
                    , "canvasborderthickness": "1"
                    , "legendiconscale": "1.5"
                    , "legendshadow": "0"
                    , "legendborderalpha": "0"
                    , "legendposition": "right"
                    , "canvasborderalpha": "50"
                    , "numvdivlines": "5"
                    , "vdivlinealpha": "20"
                    , "showborder": "0"
                }
                , "categories": [
                    {
                        "category": [

            ]
        }
    ]
                , "dataset": []
            }
        }
        this.funnelChartConfig = function () {
            ////############### pyramid chart config#################
            return {
                "chart": {
                    "caption": ""
                    , "subcaption": ""
                    , "linethickness": "1"
                    , "showvalues": "0"
                    , "formatnumberscale": "0"
                    , "anchorradius": "2"
                    , "divlinecolor": "666666"
                    , "divlinealpha": "30"
                    , "divlineisdashed": "1"
                    , "labelstep": "2"
                    , "bgcolor": "FFFFFF"
                    , "showalternatehgridcolor": "0"
                    , "labelpadding": "10"
                    , "canvasborderthickness": "1"
                    , "legendiconscale": "1.5"
                    , "legendshadow": "0"
                    , "legendborderalpha": "0"
                    , "legendposition": "right"
                    , "canvasborderalpha": "50"
                    , "numvdivlines": "5"
                    , "vdivlinealpha": "20"
                    , "showborder": "0"
                    , "paletteColors": "##46b8da,#993f6c,#cc0000"
                }
                , "data": []
            }
        };
        this.areaChartConfig = function () {
            //############### area chart config###############
            return {
                "chart": {
                    "caption": ""
                    , "subcaption": ""
                    , "plotgradientcolor": ""
                    , "bgcolor": "FFFFFF"
                    , "showalternatehgridcolor": "0"
                    , "showplotborder": "0"
                    , "showvalues": "0"
                    , "labeldisplay": "WRAP"
                    , "divlinecolor": "CCCCCC"
                    , "showcanvasborder": "0"
                    , "canvasborderalpha": "0"
                    , "palettecolors": "990000"
                    , "yaxisvaluespadding": "10"
                    , "showborder": "0"
                }
                , "data": []
            }
        }
        this.circularGraphObject = function () {
            //############### c ircular graph config###############
            return {
                "chart": {
                    "enableSmartLabels": "1"
                    , "chartTopMargin": "0"
                    , "chartRightMargin": "0"
                    , "chartBottomMargin": "0"
                    , "caption": ""
                    , "subCaption": ""
                    , "numberPrefix": ""
                    , "bgColor": "#ffffff"
                    , "showBorder": "0"
                    , "use3DLighting": "0"
                    , "showShadow": "0"
                    , "enableSmartLabels": "0"
                    , "startingAngle": "310"
                    , "showLabels": "0"
                    , "showValues": "1"
                    , "showPercentValues": "1"
                    , "showLegend": "1"
                    , "legendShadow": "0"
                    , "legendPosition": "right"
                    , "legendBorderAlpha": "0"
                    , "defaultCenterLabel": ""
                    , "centerLabel": ""
                    , "centerLabelBold": "0"
                    , "showTooltip": "1"
                    , "decimals": "0"
                    , "captionFontSize": "14"
                    , "subcaptionFontSize": "14"
                    , "subcaptionFontBold": "0"
                    , "useDataPlotColorForLabels": "1"
                    , "legendlabel": "ddd"
                }
                , "data": undefined
            }
        }
    }).controller('rootCtrl', function ($scope, dataService) {
        function circularGraphWithoutCaption(response) {
            var circulargraphData = response.data.Circular_Graph1;
            var graphFormatedData = [];
            for (var i = 0; i < circulargraphData.length; i++) {
                var obj = circulargraphData[i];
                graphFormatedData.push({
                    "label": obj.label
                    , "value": obj.count
                    , "color": obj.color
                })
            }
            return graphFormatedData;
        }
        ////############### page 1 1st row Circular###############
        var graphConfig = dataService.circularGraphObject();
        $scope.firstChart = graphConfig;
        $scope.firstGraph = function () {
            var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/circular-graph.json").then(function (response) {
                var graphFormatedData = circularGraphWithoutCaption(response);
                graphConfig.data = graphFormatedData;
                $scope.firstChart = graphConfig;
            });
        }
        $scope.firstGraph();
        //********************************************Second row charts**********************************
        var graphConfig = dataService.circularGraphObject();
        $scope.firstChart_1 = graphConfig;
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/circular-graph.json").then(function (response) {
            var graphFormatedData = circularGraphWithoutCaption(response);
            graphConfig.data = graphFormatedData;
            graphConfig.chart.caption = "Circular_Graph1";
            $scope.firstChart_1 = graphConfig;
        });
        //*****************************circular groaph with caption**************************************
        var graphConfig = dataService.circularGraphObject();
        $scope.firstChart_2 = graphConfig;
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/circular-graph.json").then(function (response) {
            var graphFormatedData = circularGraphWithoutCaption(response);
            graphConfig.data = graphFormatedData;
            graphConfig.chart.caption = "Circular_Graph1";
            $scope.firstChart_2 = graphConfig;
        });
        //***************************
        var graphConfig = dataService.circularGraphObject();
        $scope.firstChart_3 = graphConfig;
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/circular-graph.json").then(function (response) {
            var graphFormatedData = circularGraphWithoutCaption(response);
            graphConfig.data = graphFormatedData;
            graphConfig.chart.caption = "Circular_Graph1";
            $scope.firstChart_3 = graphConfig;
        });
        //************************************** page 3 tables
        $scope.alltables = [];
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/tables.json").then(function (response) {
            var tableData = response.data;
            for (var tab in tableData) {
                if (tableData.hasOwnProperty(tab)) {
                    $scope.alltables.push({
                        name: tab
                        , rows: tableData[tab].rows
                    });
                }
            }
            //console.log($scope.alltables);
        });
        //***********
        $scope.alltables2 = [];
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/table2.json").then(function (response) {
            var tableData = response.data;
            for (var tab in tableData) {
                if (tableData.hasOwnProperty(tab)) {
                    $scope.alltables2.push({
                        name: tab
                        , rows: tableData[tab].rows
                    , });
                }
            }
            //console.log($scope.alltables);
        });
        //***************************************
        $scope.areaGraphs = [];
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/area-graph.json").then(function (response) {
            var areaGraphData = response.data;
            for (var tab in areaGraphData) {
                if (areaGraphData.hasOwnProperty(tab)) {
                    var gData = [];
                    var arr = areaGraphData[tab];
                    for (var index = 0; index < arr.length; index++) {
                        gData.push({
                            label: arr[index].X
                            , value: arr[index].Y
                            , "anchoralpha": "100"
                            , "anchorradius": "7"
                            , "color": "008ee4"
                        , })
                    }
                    var arData = dataService.areaChartConfig();
                    arData.data = gData;
                    $scope.areaGraphs.push({
                        name: tab
                        , data: arData
                    })
                }
            }
        });
        //*********************line chart***********************
        $scope.flag = false;
        $scope.line_chart = dataService.lineChartConfig();
        $scope.line_chart.chart.caption = "caption for graph";
        $scope.line_chart.chart.subcaption = "subcaption for graph";
        dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/line-graph.json").then(function (response) {
                var category = [];
                var dataSet = []
                var resArr = response.data.categories;
                for (var index = 0; index < resArr.length; index++) {
                    var dataSetObj = {}
                    var obj = resArr[index];
                    category.push({
                        label: obj.label
                    });
                    dataSetObj.seriesname = obj.seriesname;
                    dataSetObj.color = obj.color;
                    dataSetObj.anchorbordercolor = obj.anchorbordercolor
                    dataSetObj.anchorbgcolor = obj.anchorbgcolor;
                    dataSetObj.data = obj.data;
                    dataSet.push(dataSetObj);
                }
                $scope.line_chart.dataset = dataSet;
                $scope.line_chart.categories[0].category = category;
                $scope.flag = true;
                //console.log($scope.line_chart)
            })
            //**************************************funnel chart
        $scope.funnelCharts = dataService.funnelChartConfig();
        $scope.fusionFlag = false;
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/circular-graph.json").then(function (response) {
            $scope.funnelCharts.chart.caption = "Circular_Graph1"
            var sum = 0;
            var funnelData = response.data.Circular_Graph1;
            var arrData = []
            for (var index = 0; index < funnelData.length; index++) {
                var obj = funnelData[index];
                arrData.push({
                    label: obj.label
                    , value: obj.count
                });
                sum += obj.count;
            }
            arrData.push({
                label: "placeholder for total value"
                , value: sum
            });
            $scope.funnelCharts.data = arrData;
            console.log($scope.funnelCharts);
            $scope.fusionFlag = true;
            //***************
        });
        //******* pyramid chart
        $scope.pyCharts = dataService.funnelChartConfig();
        $scope.pyFlag = false;
        var promise = dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/circular-graph.json").then(function (response) {
            $scope.funnelCharts.chart.caption = "Circular_Graph1"
            var sum = 0;
            var funnelData = response.data.Circular_Graph1;
            var arrData = []
            for (var index = 0; index < funnelData.length; index++) {
                var obj = funnelData[index];
                arrData.push({
                    label: obj.label
                    , value: obj.count
                });
            }
            $scope.pyCharts.data = arrData;
            $scope.pyFlag = true;
        });
        //************page 7 big tables
        $scope.allBigTables = []
        dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/bigTable.json").then(function (response) {
            var keyArray = Object.keys(response.data);
            keyArray.forEach(function (item) {
                $scope.allBigTables.push(response.data[item]);
            })
        });
        //##################page 6  single table beside pyrramid
        $scope.tableRows = []
        dataService.getData("https://raw.githubusercontent.com/mahesh-pal/mahesh-pal.github.io/master/singleTable.json").then(function (response) {
            $scope.tableRows = response.data.Table1.rows;
        })
    })
})();