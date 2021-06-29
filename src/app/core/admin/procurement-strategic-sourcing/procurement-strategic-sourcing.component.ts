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

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-procurement-strategic-sourcing",
  templateUrl: "./procurement-strategic-sourcing.component.html",
  styleUrls: ["./procurement-strategic-sourcing.component.scss"],
})
export class ProcurementStrategicSourcingComponent implements OnInit {
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
      netMove: "595.03",
      date: "2011/04/25",
      salary: "$320,800",
      type: "RFI",
      category: "ICT",
      status: "opened",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      date: "2011/07/25",
      salary: "$170,750",
      type: "RFP",
      category: "Asset",
      status: "draft",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "RFQ",
      category: "Asset Maintenance",
      status: "archived",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      date: "2012/03/29",
      salary: "$433,060",
      type: "Direct Quote",
      category: "Asset",
      status: "closed",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Reverse Auction",
      category: "ICT",
      status: "opened",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      date: "2011/07/25",
      salary: "$170,750",
      type: "Forward Auctio",
      category: "Asset Maintenance",
      status: "closed",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "RFI",
      category: "ICT",
      status: "draft",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "RFP",
      category: "Asset",
      status: "closed",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      date: "2012/03/29",
      salary: "$433,060",
      type: "RFQ",
      category: "Asset",
      status: "opened",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "Reverse Auction",
      category: "Asset Maintenance",
      status: "draft",
    },
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      date: "2011/04/25",
      salary: "$320,800",
      type: "Forward Auction",
      category: "ICT",
      status: "archived",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "Direct Quote",
      category: "Asset",
      status: "opened",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      date: "2012/03/29",
      salary: "$433,060",
      type: "RFI",
      category: "Asset Maintenance",
      status: "draft",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "983.35",
      date: "2008/11/28",
      salary: "$162,700",
      type: "RFQ",
      category: "ICT",
      status: "draft",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$385,750",
      type: "RFP",
      category: "ICT",
      status: "opened",
    },
  ];
  SelectionType = SelectionType;

  //tabs
  @ViewChild("staticTabs", { static: false }) staticTabs: TabsetComponent;

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  //calender
  addModal: BsModalRef;
  editModal: BsModalRef;
  @ViewChild("modalAdd") modalAdd: ElementRef;
  @ViewChild("modalEdit") modalEdit: ElementRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered modal-secondary",
  };
  radios = "bg-danger";
  eventTitle = undefined;
  eventDescription;
  eventId;
  event;
  startDate;
  endDate;
  calendar;
  today = new Date();
  y = this.today.getFullYear();
  m = this.today.getMonth();
  d = this.today.getDate();
  events = [
    {
      id: 0,
      title: "Lunch meeting",
      start: "2018-11-21",
      end: "2018-11-22",
      className: "bg-orange",
    },
    {
      id: 1,
      title: "Call with Dave",
      start: new Date(this.y, this.m, 1),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 2,
      title: "Lunch meeting",
      start: new Date(this.y, this.m, this.d - 1, 10, 30),
      allDay: true,
      className: "bg-orange",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 3,
      title: "All day conference",
      start: new Date(this.y, this.m, this.d + 7, 12, 0),
      allDay: true,
      className: "bg-green",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 4,
      title: "Meeting with Mary",
      start: new Date(this.y, this.m, this.d - 2),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 5,
      title: "Winter Hackaton",
      start: new Date(this.y, this.m, this.d + 1, 19, 0),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 6,
      title: "Digital event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-warning",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 7,
      title: "Marketing event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-purple",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 8,
      title: "Dinner with Family",
      start: new Date(this.y, this.m, 19),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 9,
      title: "Black Friday",
      start: new Date(this.y, this.m, 23),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 10,
      title: "Cyber Week",
      start: new Date(this.y, this.m, 2),
      allDay: true,
      className: "bg-yellow",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  ];

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
    this.initCalendar();
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
      this.getChartStrategicSourcing1();
      this.getChartStrategicSourcing2();
    });
  }

  getChartStrategicSourcing1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdivstrategicsourcing1", am4charts.XYChart);
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

  getChartStrategicSourcing2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivstrategicsourcing2",
      am4charts.PieChart
    );

    // Add data
    chart.data = [
      {
        country: "RFI",
        litres: 59,
      },
      {
        country: "RFP",
        litres: 39,
      },
      {
        country: "RFQ",
        litres: 21,
      },
      {
        country: "Direct Quote",
        litres: 16,
      },
      {
        country: "Reverse Auction",
        litres: 13,
      },
      {
        country: "FOrward Auction",
        litres: 12,
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

  changeView(newView) {
    this.calendar.changeView(newView);

    currentDate: this.calendar.view.title;
  }
  initCalendar() {
    this.calendar = new Calendar(
      document.getElementById("calendarAdminStrategicSourcing"),
      {
        plugins: [interaction, dayGridPlugin],
        defaultView: "dayGridMonth",
        selectable: true,
        editable: true,
        events: this.events,
        views: {
          month: {
            titleFormat: { month: "long", year: "numeric" },
          },
          agendaWeek: {
            titleFormat: { month: "long", year: "numeric", day: "numeric" },
          },
          agendaDay: {
            titleFormat: { month: "short", year: "numeric", day: "numeric" },
          },
        },
        // Add new event
        select: (info) => {
          this.addModal = this.modalService.show(this.modalAdd, this.default);
          this.startDate = info.startStr;
          this.endDate = info.endStr;
        },
        // Edit calendar event action
        eventClick: ({ event }) => {
          this.eventId = event.id;
          this.eventTitle = event.title;
          this.eventDescription = event.extendedProps.description;
          this.radios = "bg-danger";
          this.event = event;
          this.editModal = this.modalService.show(this.modalEdit, this.default);
        },
      }
    );
    this.calendar.render();
  }
  getNewEventTitle(e) {
    this.eventTitle = e.target.value;
  }
  getNewEventDescription(e) {
    this.eventDescription = e.target.value;
  }
  addNewEvent() {
    this.events.push({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length,
    });
    this.calendar.addEvent({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length,
    });
    this.addModal.hide();
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  deleteEventSweetAlert() {
    this.editModal.hide();
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-danger",
        cancelButtonClass: "btn btn-secondary",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false,
      })
      .then((result) => {
        if (result.value) {
          this.events = this.events.filter(
            (prop) => prop.id + "" !== this.eventId
          );
          this.initCalendar();
          swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            type: "success",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: false,
          });
        }
      });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  updateEvent() {
    this.events = this.events.map((prop, key) => {
      if (prop.id + "" === this.eventId + "") {
        return {
          ...prop,
          title: this.eventTitle,
          className: this.radios,
          description: this.eventDescription,
        };
      } else {
        return prop;
      }
    });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
    this.initCalendar();
    this.editModal.hide();
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

  successSwal1() {
    swal.fire({
      title: "Success",
      text: "Successfully !",
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
