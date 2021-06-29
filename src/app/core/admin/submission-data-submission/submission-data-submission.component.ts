import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swal from "sweetalert2";

@Component({
  selector: "app-submission-data-submission",
  templateUrl: "./submission-data-submission.component.html",
  styleUrls: ["./submission-data-submission.component.scss"],
})
export class SubmissionDataSubmissionComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;
  private chart5: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
      if (this.chart5) {
        console.log("Chart disposed");
        this.chart5.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartAdminSubmissionData1();
      this.getChartAdminSubmissionData2();
      this.getChartAdminSubmissionData3();
      this.getChartAdminSubmissionData4();
      this.getChartAdminSubmissionData5();
    });
  }

  getChartAdminSubmissionData1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivadminsubsmissiondata1",
      am4charts.XYChart
    );

    // Add data
    chart.data = generatechartData();
    function generatechartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 150);
      let visits = -40;
      let b = 0.6;
      for (var i = 0; i < 150; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);
        if (i > 80) {
          b = 0.4;
        }
        visits += Math.round((Math.random() < b ? 1 : -1) * Math.random() * 10);

        chartData.push({
          date: newDate,
          visits: visits,
        });
      }
      return chartData;
    }

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.dateX = "date";
    series.strokeWidth = 3;
    series.tooltipText = "{valueY.value}";
    series.fillOpacity = 0.1;

    // Create a range to change stroke for values below 0
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = chart.colors.getIndex(4);
    range.contents.fill = range.contents.stroke;
    range.contents.strokeOpacity = 0.7;
    range.contents.fillOpacity = 0.1;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    series.tooltip.getFillFromObject = false;
    series.tooltip.adapter.add("x", (x, target) => {
      let wasd = series.tooltip.tooltipDataItem as any;
      if (wasd.valueY < 0) {
        series.tooltip.background.fill = chart.colors.getIndex(4);
      } else {
        series.tooltip.background.fill = chart.colors.getIndex(0);
      }
      return x;
    });

    this.chart1 = chart;
  }

  getChartAdminSubmissionData2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivadminsubsmissiondata2",
      am4charts.XYChart
    );

    chart.data = [
      {
        country: "Financial 1",
        visits: 2025,
      },
      {
        country: "Financial 2",
        visits: 1882,
      },
      {
        country: "Financial 3",
        visits: 1809,
      },
      {
        country: "Financial 4",
        visits: 1322,
      },
      {
        country: "Financial 5",
        visits: 1122,
      },
      {
        country: "Financial 6",
        visits: 1114,
      },
    ];

    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    setInterval(function () {
      am4core.array.each(chart.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
      });
      chart.invalidateRawData();
    }, 2000);

    categoryAxis.sortBySeries = series;

    this.chart2 = chart;
  }

  getChartAdminSubmissionData3() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivadminsubsmissiondata3",
      am4charts.XYChart
    );

    // Add percent sign to all numbers
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Add data
    chart.data = [
      {
        country: "USA",
        year2004: 3.5,
        year2005: 4.2,
      },
      {
        country: "UK",
        year2004: 1.7,
        year2005: 3.1,
      },
      {
        country: "Canada",
        year2004: 2.8,
        year2005: 2.9,
      },
      {
        country: "Japan",
        year2004: 2.6,
        year2005: 2.3,
      },
      {
        country: "France",
        year2004: 1.4,
        year2005: 2.1,
      },
      {
        country: "Brazil",
        year2004: 2.6,
        year2005: 4.9,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.title.text = "GDP growth rate";
    // valueAxis.title.fontWeight = 800;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "year2004";
    series.dataFields.categoryX = "country";
    series.clustered = false;
    series.tooltipText = "GDP grow in {categoryX} (2004): [bold]{valueY}[/]";

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "year2005";
    series2.dataFields.categoryX = "country";
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(50);
    series2.tooltipText = "GDP grow in {categoryX} (2005): [bold]{valueY}[/]";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;

    this.chart3 = chart;
  }

  getChartAdminSubmissionData4() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivadminsubsmissiondata4",
      am4charts.XYChart
    );

    // Add data
    chart.data = [
      {
        date: "2019-07-27",
        value: 13,
      },
      {
        date: "2019-07-28",
        value: 11,
      },
      {
        date: "2019-07-29",
        value: 15,
      },
      {
        date: "2019-07-30",
        value: 16,
      },
      {
        date: "2019-07-31",
        value: 18,
      },
      {
        date: "2019-08-01",
        value: 13,
      },
      {
        date: "2019-08-02",
        value: 22,
      },
      {
        date: "2019-08-03",
        value: 23,
      },
      {
        date: "2019-08-04",
        value: 20,
      },
      {
        date: "2019-08-05",
        value: 17,
      },
      {
        date: "2019-08-06",
        value: 16,
      },
      {
        date: "2019-08-07",
        value: 18,
      },
      {
        date: "2019-08-08",
        value: 21,
      },
      {
        date: "2019-08-09",
        value: 26,
      },
      {
        date: "2019-08-10",
        value: 24,
      },
      {
        date: "2019-08-11",
        value: 29,
      },
      {
        date: "2019-08-12",
        value: 32,
      },
      {
        date: "2019-08-13",
        value: 18,
      },
      {
        date: "2019-08-14",
        value: 24,
      },
      {
        date: "2019-08-15",
        value: 22,
      },
      {
        date: "2019-08-16",
        value: 18,
      },
      {
        date: "2019-08-17",
        value: 19,
      },
      {
        date: "2019-08-18",
        value: 14,
      },
      {
        date: "2019-08-19",
        value: 15,
      },
      {
        date: "2019-08-20",
        value: 12,
      },
      {
        date: "2019-08-21",
        value: 8,
      },
      {
        date: "2019-08-22",
        value: 9,
      },
      {
        date: "2019-08-23",
        value: 8,
      },
      {
        date: "2019-08-24",
        value: 7,
      },
      {
        date: "2019-08-25",
        value: 5,
      },
      {
        date: "2019-08-26",
        value: 11,
      },
      {
        date: "2019-08-27",
        value: 13,
      },
      {
        date: "2019-08-28",
        value: 18,
      },
      {
        date: "2019-08-29",
        value: 20,
      },
      {
        date: "2019-08-30",
        value: 29,
      },
      {
        date: "2019-08-31",
        value: 33,
      },
      {
        date: "2019-09-01",
        value: 42,
      },
      {
        date: "2019-09-02",
        value: 35,
      },
      {
        date: "2019-09-03",
        value: 31,
      },
      {
        date: "2019-09-04",
        value: 47,
      },
      {
        date: "2019-09-05",
        value: 52,
      },
      {
        date: "2019-09-06",
        value: 46,
      },
      {
        date: "2019-09-07",
        value: 41,
      },
      {
        date: "2019-09-08",
        value: 43,
      },
      {
        date: "2019-09-09",
        value: 40,
      },
      {
        date: "2019-09-10",
        value: 39,
      },
      {
        date: "2019-09-11",
        value: 34,
      },
      {
        date: "2019-09-12",
        value: 29,
      },
      {
        date: "2019-09-13",
        value: 34,
      },
      {
        date: "2019-09-14",
        value: 37,
      },
      {
        date: "2019-09-15",
        value: 42,
      },
      {
        date: "2019-09-16",
        value: 49,
      },
      {
        date: "2019-09-17",
        value: 46,
      },
      {
        date: "2019-09-18",
        value: 47,
      },
      {
        date: "2019-09-19",
        value: 55,
      },
      {
        date: "2019-09-20",
        value: 59,
      },
      {
        date: "2019-09-21",
        value: 58,
      },
      {
        date: "2019-09-22",
        value: 57,
      },
      {
        date: "2019-09-23",
        value: 61,
      },
      {
        date: "2019-09-24",
        value: 59,
      },
      {
        date: "2019-09-25",
        value: 67,
      },
      {
        date: "2019-09-26",
        value: 65,
      },
      {
        date: "2019-09-27",
        value: 61,
      },
      {
        date: "2019-09-28",
        value: 66,
      },
      {
        date: "2019-09-29",
        value: 69,
      },
      {
        date: "2019-09-30",
        value: 71,
      },
      {
        date: "2019-10-01",
        value: 67,
      },
      {
        date: "2019-10-02",
        value: 63,
      },
      {
        date: "2019-10-03",
        value: 46,
      },
      {
        date: "2019-10-04",
        value: 32,
      },
      {
        date: "2019-10-05",
        value: 21,
      },
      {
        date: "2019-10-06",
        value: 18,
      },
      {
        date: "2019-10-07",
        value: 21,
      },
      {
        date: "2019-10-08",
        value: 28,
      },
      {
        date: "2019-10-09",
        value: 27,
      },
      {
        date: "2019-10-10",
        value: 36,
      },
      {
        date: "2019-10-11",
        value: 33,
      },
      {
        date: "2019-10-12",
        value: 31,
      },
      {
        date: "2019-10-13",
        value: 30,
      },
      {
        date: "2019-10-14",
        value: 34,
      },
      {
        date: "2019-10-15",
        value: 38,
      },
      {
        date: "2019-10-16",
        value: 37,
      },
      {
        date: "2019-10-17",
        value: 44,
      },
      {
        date: "2019-10-18",
        value: 49,
      },
      {
        date: "2019-10-19",
        value: 53,
      },
      {
        date: "2019-10-20",
        value: 57,
      },
      {
        date: "2019-10-21",
        value: 60,
      },
      {
        date: "2019-10-22",
        value: 61,
      },
      {
        date: "2019-10-23",
        value: 69,
      },
      {
        date: "2019-10-24",
        value: 67,
      },
      {
        date: "2019-10-25",
        value: 72,
      },
      {
        date: "2019-10-26",
        value: 77,
      },
      {
        date: "2019-10-27",
        value: 75,
      },
      {
        date: "2019-10-28",
        value: 70,
      },
      {
        date: "2019-10-29",
        value: 72,
      },
      {
        date: "2019-10-30",
        value: 70,
      },
      {
        date: "2019-10-31",
        value: 72,
      },
      {
        date: "2019-11-01",
        value: 73,
      },
      {
        date: "2019-11-02",
        value: 67,
      },
      {
        date: "2019-11-03",
        value: 68,
      },
      {
        date: "2019-11-04",
        value: 65,
      },
      {
        date: "2019-11-05",
        value: 71,
      },
      {
        date: "2019-11-06",
        value: 75,
      },
      {
        date: "2019-11-07",
        value: 74,
      },
      {
        date: "2019-11-08",
        value: 71,
      },
      {
        date: "2019-11-09",
        value: 76,
      },
      {
        date: "2019-11-10",
        value: 77,
      },
      {
        date: "2019-11-11",
        value: 81,
      },
      {
        date: "2019-11-12",
        value: 83,
      },
      {
        date: "2019-11-13",
        value: 80,
      },
      {
        date: "2019-11-14",
        value: 81,
      },
      {
        date: "2019-11-15",
        value: 87,
      },
      {
        date: "2019-11-16",
        value: 82,
      },
      {
        date: "2019-11-17",
        value: 86,
      },
      {
        date: "2019-11-18",
        value: 80,
      },
      {
        date: "2019-11-19",
        value: 87,
      },
      {
        date: "2019-11-20",
        value: 83,
      },
      {
        date: "2019-11-21",
        value: 85,
      },
      {
        date: "2019-11-22",
        value: 84,
      },
      {
        date: "2019-11-23",
        value: 82,
      },
      {
        date: "2019-11-24",
        value: 73,
      },
      {
        date: "2019-11-25",
        value: 71,
      },
      {
        date: "2019-11-26",
        value: 75,
      },
      {
        date: "2019-11-27",
        value: 79,
      },
      {
        date: "2019-11-28",
        value: 70,
      },
      {
        date: "2019-11-29",
        value: 73,
      },
      {
        date: "2019-11-30",
        value: 61,
      },
      {
        date: "2019-12-01",
        value: 62,
      },
      {
        date: "2019-12-02",
        value: 66,
      },
      {
        date: "2019-12-03",
        value: 65,
      },
      {
        date: "2019-12-04",
        value: 73,
      },
      {
        date: "2019-12-05",
        value: 79,
      },
      {
        date: "2019-12-06",
        value: 78,
      },
      {
        date: "2019-12-07",
        value: 78,
      },
      {
        date: "2019-12-08",
        value: 78,
      },
      {
        date: "2019-12-09",
        value: 74,
      },
      {
        date: "2019-12-10",
        value: 73,
      },
      {
        date: "2019-12-11",
        value: 75,
      },
      {
        date: "2019-12-12",
        value: 70,
      },
      {
        date: "2019-12-13",
        value: 77,
      },
      {
        date: "2019-12-14",
        value: 67,
      },
      {
        date: "2019-12-15",
        value: 62,
      },
      {
        date: "2019-12-16",
        value: 64,
      },
      {
        date: "2019-12-17",
        value: 61,
      },
      {
        date: "2019-12-18",
        value: 59,
      },
      {
        date: "2019-12-19",
        value: 53,
      },
      {
        date: "2019-12-20",
        value: 54,
      },
      {
        date: "2019-12-21",
        value: 56,
      },
      {
        date: "2019-12-22",
        value: 59,
      },
      {
        date: "2019-12-23",
        value: 58,
      },
      {
        date: "2019-12-24",
        value: 55,
      },
      {
        date: "2019-12-25",
        value: 52,
      },
      {
        date: "2019-12-26",
        value: 54,
      },
      {
        date: "2019-12-27",
        value: 50,
      },
      {
        date: "2019-12-28",
        value: 50,
      },
      {
        date: "2019-12-29",
        value: 51,
      },
      {
        date: "2019-12-30",
        value: 52,
      },
      {
        date: "2019-12-31",
        value: 58,
      },
      {
        date: "2020-01-01",
        value: 60,
      },
      {
        date: "2020-01-02",
        value: 67,
      },
      {
        date: "2020-01-03",
        value: 64,
      },
      {
        date: "2020-01-04",
        value: 66,
      },
      {
        date: "2020-01-05",
        value: 60,
      },
      {
        date: "2020-01-06",
        value: 63,
      },
      {
        date: "2020-01-07",
        value: 61,
      },
      {
        date: "2020-01-08",
        value: 60,
      },
      {
        date: "2020-01-09",
        value: 65,
      },
      {
        date: "2020-01-10",
        value: 75,
      },
      {
        date: "2020-01-11",
        value: 77,
      },
      {
        date: "2020-01-12",
        value: 78,
      },
      {
        date: "2020-01-13",
        value: 70,
      },
      {
        date: "2020-01-14",
        value: 70,
      },
      {
        date: "2020-01-15",
        value: 73,
      },
      {
        date: "2020-01-16",
        value: 71,
      },
      {
        date: "2020-01-17",
        value: 74,
      },
      {
        date: "2020-01-18",
        value: 78,
      },
      {
        date: "2020-01-19",
        value: 85,
      },
      {
        date: "2020-01-20",
        value: 82,
      },
      {
        date: "2020-01-21",
        value: 83,
      },
      {
        date: "2020-01-22",
        value: 88,
      },
      {
        date: "2020-01-23",
        value: 85,
      },
      {
        date: "2020-01-24",
        value: 85,
      },
      {
        date: "2020-01-25",
        value: 80,
      },
      {
        date: "2020-01-26",
        value: 87,
      },
      {
        date: "2020-01-27",
        value: 84,
      },
      {
        date: "2020-01-28",
        value: 83,
      },
      {
        date: "2020-01-29",
        value: 84,
      },
      {
        date: "2020-01-30",
        value: 81,
      },
    ];

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    let qwert = chart.scrollbarX as any;
    qwert.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart4 = chart;
  }

  getChartAdminSubmissionData5() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivadminsubsmissiondata5",
      am4charts.XYChart
    );

    // some extra padding for range labels
    chart.paddingBottom = 50;

    chart.cursor = new am4charts.XYCursor();
    chart.scrollbarX = new am4core.Scrollbar();

    // will use this to store colors of the same items
    let colors = {};

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataItems.template.text = "{realName}";
    categoryAxis.adapter.add("tooltipText", function (tooltipText, target) {
      let tryop = categoryAxis.tooltipDataItem.dataContext as any;
      return tryop.realName;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.min = 0;

    // single column series for all data
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.columns.template.width = am4core.percent(80);
    columnSeries.tooltipText = "{provider}: {realName}, {valueY}";
    columnSeries.dataFields.categoryX = "category";
    columnSeries.dataFields.valueY = "value";

    // second value axis for quantity
    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    valueAxis2.syncWithAxis = valueAxis;
    valueAxis2.tooltip.disabled = true;

    // quantity line series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.tooltipText = "{valueY}";
    lineSeries.dataFields.categoryX = "category";
    lineSeries.dataFields.valueY = "quantity";
    lineSeries.yAxis = valueAxis2;
    lineSeries.bullets.push(new am4charts.CircleBullet());
    lineSeries.stroke = chart.colors.getIndex(13);
    lineSeries.fill = lineSeries.stroke;
    lineSeries.strokeWidth = 2;
    lineSeries.snapTooltip = true;

    // when data validated, adjust location of data item based on count
    lineSeries.events.on("datavalidated", function () {
      lineSeries.dataItems.each(function (dataItem) {
        // if count divides by two, location is 0 (on the grid)
        let tryopok = dataItem.dataContext as any;
        if (
          tryopok.count / 2 ==
          Math.round(tryopok.count / 2)
        ) {
          dataItem.setLocation("categoryX", 0);
        }
        // otherwise location is 0.5 (middle)
        else {
          dataItem.setLocation("categoryX", 0.5);
        }
      });
    });

    // fill adapter, here we save color value to colors object so that each time the item has the same name, the same color is used
    columnSeries.columns.template.adapter.add("fill", function (fill, target) {
      let gigkil = target.dataItem.dataContext as any;
      let name = gigkil.realName;
      if (!colors[name]) {
        colors[name] = chart.colors.next();
      }
      target.stroke = colors[name];
      return colors[name];
    });

    let rangeTemplate = categoryAxis.axisRanges.template;
    rangeTemplate.tick.disabled = false;
    rangeTemplate.tick.location = 0;
    rangeTemplate.tick.strokeOpacity = 0.6;
    rangeTemplate.tick.length = 60;
    rangeTemplate.grid.strokeOpacity = 0.5;
    rangeTemplate.label.tooltip = new am4core.Tooltip();
    rangeTemplate.label.tooltip.dy = -10;
    rangeTemplate.label.cloneTooltip = false;

    ///// DATA
    let chartData = [];
    let lineSeriesData = [];

    let data = {
      "2017": {
        "Revenue": 10,
        "Net Income": 35,
        quantity: 430,
      },
      "2018": {
        "Revenue": 15,
        "Net Income": 21,
        quantity: 210,
      },
      "2019": {
        "Revenue": 25,
        "Net Income": 11,
        quantity: 265,
      },
      "2020": {
        "Revenue": 12,
        "Net Income": 15,
        quantity: 98,
      },
    };

    // process data ant prepare it for the chart
    for (var providerName in data) {
      let providerData = data[providerName];

      // add data of one provider to temp array
      let tempArray = [];
      let count = 0;
      // add items
      for (var itemName in providerData) {
        if (itemName != "quantity") {
          count++;
          // we generate unique category for each column (providerName + "_" + itemName) and store realName
          tempArray.push({
            category: providerName + "_" + itemName,
            realName: itemName,
            value: providerData[itemName],
            provider: providerName,
          });
        }
      }
      // sort temp array
      tempArray.sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        } else if (a.value < b.value) {
          return -1;
        } else {
          return 0;
        }
      });

      // add quantity and count to middle data item (line series uses it)
      let lineSeriesDataIndex = Math.floor(count / 2);
      tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
      tempArray[lineSeriesDataIndex].count = count;
      // push to the final data
      am4core.array.each(tempArray, function (item) {
        chartData.push(item);
      });

      // create range (the additional label at the bottom)
      let range = categoryAxis.axisRanges.create();
      range.category = tempArray[0].category;
      range.endCategory = tempArray[tempArray.length - 1].category;
      range.label.text = tempArray[0].provider;
      range.label.dy = 30;
      range.label.truncate = true;
      range.label.fontWeight = "bold";
      range.label.tooltipText = tempArray[0].provider;

      range.label.adapter.add("maxWidth", function (maxWidth, target) {
        let range = target.dataItem as any;
        let startPosition = categoryAxis.categoryToPosition(range.category, 0);
        let endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
        let startX = categoryAxis.positionToCoordinate(startPosition);
        let endX = categoryAxis.positionToCoordinate(endPosition);
        return endX - startX;
      });
    }

    chart.data = chartData;

    // last tick
    let range = categoryAxis.axisRanges.create();
    range.category = chart.data[chart.data.length - 1].category;
    range.label.disabled = true;
    range.tick.location = 1;
    range.grid.location = 1;

    this.chart5 = chart;
  }

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }

  delete() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to delete this data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.doneDelete();
        }
      });
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data has been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }

  notification() {
    swal.fire({
      title: "Success",
      text: "Successfully sent!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }
}
