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

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-consignment-logistic-qms",
  templateUrl: "./consignment-logistic-qms.component.html",
  styleUrls: ["./consignment-logistic-qms.component.scss"],
})
export class ConsignmentLogisticQmsComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      date: "2011/04/25",
      salary: "$320,800",
      type: "RFI",
      category: "Category 1",
      status: "opened",
      duedate: "2012/06/25",
      coin: "23",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      date: "2011/07/25",
      salary: "$170,750",
      type: "RFP",
      category: "Category 3",
      status: "opened",
      duedate: "2015/03/21",
      coin: "73",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "RFQ",
      category: "Category 2",
      status: "archived",
      duedate: "2011/07/25",
      coin: "30",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      date: "2012/03/29",
      salary: "$433,060",
      type: "Direct Quote",
      category: "Category 4",
      status: "closed",
      duedate: "2013/06/13",
      coin: "25",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Category 3",
      category: "Category 3",
      status: "draft",
      duedate: "2011/02/03",
      coin: "64",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      date: "2011/07/25",
      salary: "$170,750",
      type: "Forward Auctio",
      category: "Category 3",
      status: "closed",
      duedate: "2012/09/30",
      coin: "14",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "RFI",
      category: "Category 1",
      status: "pending",
      duedate: "2009/11/25",
      coin: "21",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "RFP",
      category: "Category 2",
      status: "closed",
      duedate: "2011/07/25",
      coin: "95",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      date: "2012/03/29",
      salary: "$433,060",
      type: "RFQ",
      category: "Category 1",
      status: "opened",
      duedate: "2014/06/12",
      coin: "67",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Reverse Auction",
      category: "Category 3",
      status: "draft",
      duedate: "2011/07/25",
      coin: "58",
    },
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      date: "2011/04/25",
      salary: "$320,800",
      type: "Forward Auction",
      category: "Category 1",
      status: "pending",
      duedate: "2011/11/30",
      coin: "36",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "Direct Quote",
      category: "Category 4",
      status: "opened",
      duedate: "2011/07/25",
      coin: "36",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      date: "2012/03/29",
      salary: "$433,060",
      type: "RFI",
      category: "Category 2",
      status: "draft",
      duedate: "2014/03/25",
      coin: "25",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "RFQ",
      category: "Category 4",
      status: "draft",
      duedate: "2011/07/25",
      coin: "63",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$385,750",
      type: "RFP",
      category: "Category 1",
      status: "opened",
      duedate: "2011/07/25",
      coin: "45",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

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
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartAdminConsLogQMS1();
      this.getChartAdminConsLogQMS2();
    });
  }

  getChartAdminConsLogQMS1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdivadminconlogqms1", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    //chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Online",
        litres: 501.9,
      },
      {
        country: "In Progress",
        litres: 301.9,
      },
      {
        country: "Complete",
        litres: 201.1,
      },
      {
        country: "Failed",
        litres: 165.8,
      },
    ];

    chart.innerRadius = 100;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart1 = chart;
  }

  getChartAdminConsLogQMS2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivadminconlogqms2", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        country: "Request 1",
        year2017: 3.5,
        year2018: 4.2,
      },
      {
        country: "Request 2",
        year2017: 1.7,
        year2018: 3.1,
      },
      {
        country: "Request 3",
        year2017: 2.8,
        year2018: 2.9,
      },
      {
        country: "Request 4",
        year2017: 2.6,
        year2018: 2.3,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "GDP growth rate";
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    });

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2017";
    series.dataFields.categoryX = "country";
    series.name = "Year 2017";
    series.clustered = false;
    series.columns.template.tooltipText =
      "GDP grow in {category} (2017): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    let series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2018";
    series2.dataFields.categoryX = "country";
    series2.name = "Year 2018";
    series2.clustered = false;
    series2.columns.template.tooltipText =
      "GDP grow in {category} (2017): [bold]{valueY}[/]";

    this.chart2 = chart;
  }

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    // this.modalRef.hide();
    // this.ngOnDestroy();
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onActivate(event) {
    this.activeRow = event.row;
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
}
