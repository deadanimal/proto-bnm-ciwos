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

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";

@Component({
  selector: "app-user-conlog-supplier",
  templateUrl: "./user-conlog-supplier.component.html",
  styleUrls: ["./user-conlog-supplier.component.scss"],
})
export class UserConlogSupplierComponent implements OnInit {
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
  ) {}

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
      this.getChartConsLogSupplier1();
    });
  }

  getChartConsLogSupplier1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivuserconlogsupplier1",
      am4charts.XYChart
    );
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = [
      {
        category: "Module #1",
        start: "2020-01-01",
        end: "2020-01-14",
        color: colorSet.getIndex(0).brighten(0),
        task: "Gathering requirements",
      },
      {
        category: "Module #1",
        start: "2020-01-16",
        end: "2020-01-27",
        color: colorSet.getIndex(0).brighten(0.4),
        task: "Producing specifications",
      },
      {
        category: "Module #1",
        start: "2020-02-05",
        end: "2020-04-18",
        color: colorSet.getIndex(0).brighten(0.8),
        task: "Development",
      },
      {
        category: "Module #1",
        start: "2020-04-18",
        end: "2020-04-30",
        color: colorSet.getIndex(0).brighten(1.2),
        task: "Testing and QA",
      },
      {
        category: "Module #2",
        start: "2020-01-08",
        end: "2020-01-10",
        color: colorSet.getIndex(2).brighten(0),
        task: "Gathering requirements",
      },
      {
        category: "Module #2",
        start: "2020-01-12",
        end: "2020-01-15",
        color: colorSet.getIndex(2).brighten(0.4),
        task: "Producing specifications",
      },
      {
        category: "Module #2",
        start: "2020-01-16",
        end: "2020-02-05",
        color: colorSet.getIndex(2).brighten(0.8),
        task: "Development",
      },
      {
        category: "Module #2",
        start: "2020-02-10",
        end: "2020-02-18",
        color: colorSet.getIndex(2).brighten(1.2),
        task: "Testing and QA",
      },
      {
        category: "Module #3",
        start: "2020-01-02",
        end: "2020-01-08",
        color: colorSet.getIndex(4).brighten(0),
        task: "Gathering requirements",
      },
      {
        category: "Module #3",
        start: "2020-01-08",
        end: "2020-01-16",
        color: colorSet.getIndex(4).brighten(0.4),
        task: "Producing specifications",
      },
      {
        category: "Module #3",
        start: "2020-01-19",
        end: "2020-03-01",
        color: colorSet.getIndex(4).brighten(0.8),
        task: "Development",
      },
      {
        category: "Module #3",
        start: "2020-03-12",
        end: "2020-04-05",
        color: colorSet.getIndex(4).brighten(1.2),
        task: "Testing and QA",
      },
      {
        category: "Module #4",
        start: "2020-01-01",
        end: "2020-01-19",
        color: colorSet.getIndex(6).brighten(0),
        task: "Gathering requirements",
      },
      {
        category: "Module #4",
        start: "2020-01-19",
        end: "2020-02-03",
        color: colorSet.getIndex(6).brighten(0.4),
        task: "Producing specifications",
      },
      {
        category: "Module #4",
        start: "2020-03-20",
        end: "2020-04-25",
        color: colorSet.getIndex(6).brighten(0.8),
        task: "Development",
      },
      {
        category: "Module #4",
        start: "2020-04-27",
        end: "2020-05-15",
        color: colorSet.getIndex(6).brighten(1.2),
        task: "Testing and QA",
      },
      {
        category: "Module #5",
        start: "2020-01-01",
        end: "2020-01-12",
        color: colorSet.getIndex(8).brighten(0),
        task: "Gathering requirements",
      },
      {
        category: "Module #5",
        start: "2020-01-12",
        end: "2020-01-19",
        color: colorSet.getIndex(8).brighten(0.4),
        task: "Producing specifications",
      },
      {
        category: "Module #5",
        start: "2020-01-19",
        end: "2020-03-01",
        color: colorSet.getIndex(8).brighten(0.8),
        task: "Development",
      },
      {
        category: "Module #5",
        start: "2020-03-08",
        end: "2020-03-30",
        color: colorSet.getIndex(8).brighten(1.2),
        task: "Testing and QA",
      },
    ];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    // dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
    //dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.height = am4core.percent(70);
    series1.columns.template.tooltipText =
      "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series1.dataFields.openDateX = "start";
    series1.dataFields.dateX = "end";
    series1.dataFields.categoryY = "category";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;

    chart.scrollbarX = new am4core.Scrollbar();

    this.chart1 = chart;
  }

  changeView(newView) {
    this.calendar.changeView(newView);

    currentDate: this.calendar.view.title;
  }
  initCalendar() {
    this.calendar = new Calendar(
      document.getElementById("calendarUserConsigmentLogisticSupplier1"),
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
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
