import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ElementRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swal from "sweetalert2";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TabsetComponent } from "ngx-bootstrap/tabs";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-procurement-tender-management",
  templateUrl: "./procurement-tender-management.component.html",
  styleUrls: ["./procurement-tender-management.component.scss"],
})
export class ProcurementTenderManagementComponent implements OnInit {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  //form
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  // Modal
  modalRef: BsModalRef;
  modalRef1: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

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
      netMove: "32",
      date: "2011/04/25",
      salary: "$320,800",
      type: "Opened",
      category: "Category 1",
      status: "opened",
      duedate: "2012/06/25",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "31",
      date: "2011/07/25",
      salary: "$170,750",
      type: "Closed",
      category: "Category 3",
      status: "pending",
      duedate: "2015/03/21",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "42",
      date: "2009/01/12",
      salary: "$86,000",
      type: "Archived",
      category: "Category 2",
      status: "archived",
      duedate: "2011/07/25",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "12",
      date: "2012/03/29",
      salary: "$433,060",
      type: "Draft",
      category: "Category 4",
      status: "closed",
      duedate: "2013/06/13",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "9",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Opened",
      category: "Category 3",
      status: "draft",
      duedate: "2011/02/03",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "34",
      date: "2011/07/25",
      salary: "$170,750",
      type: "Closed",
      category: "Category 3",
      status: "closed",
      duedate: "2012/09/30",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Archived",
      category: "Category 1",
      status: "pending",
      duedate: "2009/11/25",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "Draft",
      category: "Category 2",
      status: "closed",
      duedate: "2011/07/25",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "22",
      date: "2012/03/29",
      salary: "$433,060",
      type: "Opened",
      category: "Category 1",
      status: "opened",
      duedate: "2014/06/12",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "9",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Closed",
      category: "Category 3",
      status: "draft",
      duedate: "2011/07/25",
    },
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "16",
      date: "2011/04/25",
      salary: "$320,800",
      type: "Archived",
      category: "Category 1",
      status: "pending",
      duedate: "2011/11/30",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "42",
      date: "2009/01/12",
      salary: "$86,000",
      type: "Draft",
      category: "Category 4",
      status: "opened",
      duedate: "2011/07/25",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "12",
      date: "2012/03/29",
      salary: "$433,060",
      type: "Opened",
      category: "Category 2",
      status: "draft",
      duedate: "2014/03/25",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "10",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Closed",
      category: "Category 4",
      status: "draft",
      duedate: "2011/07/25",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "46",
      date: "2009/01/12",
      salary: "$385,750",
      type: "Archived",
      category: "Category 1",
      status: "opened",
      duedate: "2011/07/25",
    },
  ];
  SelectionType = SelectionType;

  //tabs
  @ViewChild("staticTabs", { static: false }) staticTabs: TabsetComponent;

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
    private _formBuilder: FormBuilder
  ) {
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
      this.getChartDivAdminTenderManagement1();
      this.getChartDivAdminTenderManagement2();
      this.getChartDivAdminTenderManagement3();
      this.getChartDivAdminTenderManagement4();
    });
  }

  getChartDivAdminTenderManagement1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivadmintendermanagement1",
      am4charts.XYChart
    );
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "January",
        visits: 3025,
      },
      {
        country: "February",
        visits: 1882,
      },
      {
        country: "March",
        visits: 1809,
      },
      {
        country: "April",
        visits: 1322,
      },
      {
        country: "May",
        visits: 1122,
      },
      {
        country: "June",
        visits: 1114,
      },
      {
        country: "July",
        visits: 984,
      },
      {
        country: "August",
        visits: 711,
      },
      {
        country: "September",
        visits: 665,
      },
      {
        country: "October",
        visits: 580,
      },
      {
        country: "November",
        visits: 443,
      },
      {
        country: "December",
        visits: 441,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    this.chart1 = chart;
  }

  getChartDivAdminTenderManagement2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivadmintendermanagement2",
      am4charts.PieChart
    );

    // Add data
    chart.data = [
      {
        country: "Category 1",
        litres: 59,
      },
      {
        country: "Category 2",
        litres: 39,
      },
      {
        country: "Category 3",
        litres: 21,
      },
      {
        country: "Category 4",
        litres: 16,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    this.chart2 = chart;
  }

  getChartDivAdminTenderManagement3() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivadmintendermanagement3",
      am4charts.XYChart
    );
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        category: "Tender 1",
        value1: 1,
        value2: 5,
        value3: 3,
      },
      {
        category: "Tender 2",
        value1: 2,
        value2: 5,
        value3: 3,
      },
      {
        category: "Tender 3",
        value1: 3,
        value2: 5,
        value3: 4,
      },
      {
        category: "Tender 4",
        value1: 4,
        value2: 5,
        value3: 6,
      },
      {
        category: "Tender 5",
        value1: 3,
        value2: 5,
        value3: 4,
      },
      {
        category: "Tender 6",
        value1: 2,
        value2: 13,
        value3: 1,
      },
    ];

    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series1.name = "Submitted";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "value1";
    series1.dataFields.valueYShow = "totalPercent";
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";

    let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series2.name = "Rejected";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "value2";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";

    let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color("#ffffff");

    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series3.name = "Pending";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "value3";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";

    let bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");

    chart.scrollbarX = new am4core.Scrollbar();

    this.chart3 = chart;
  }

  getChartDivAdminTenderManagement4() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivadmintendermanagement4",
      am4charts.PieChart3D
    );
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Approval 1",
        litres: 59,
      },
      {
        country: "Approval 2",
        litres: 30,
      },
      {
        country: "Final Approval",
        litres: 21,
      },
      {
        country: "Rejected",
        litres: 16,
      },
      {
        country: "On Hold",
        litres: 9,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart4 = chart;
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

  successSwal1(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    this.modalRef.hide();
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ["", Validators.required],
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
}
