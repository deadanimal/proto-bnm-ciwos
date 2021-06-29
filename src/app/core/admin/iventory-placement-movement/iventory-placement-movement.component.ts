import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef,
  TemplateRef,
  OnDestroy
} from "@angular/core";
import swal from "sweetalert2";

import { BsModalRef, BsModalService } from "ngx-bootstrap";

import * as moment from "moment";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { tileLayer, latLng, marker, icon } from "leaflet";
import { any } from "@amcharts/amcharts4/.internal/core/utils/Array";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-iventory-placement-movement",
  templateUrl: "./iventory-placement-movement.component.html",
  styleUrls: ["./iventory-placement-movement.component.scss"],
})
export class IventoryPlacementMovementComponent implements OnInit, OnDestroy {
  
  private chart1 : any;
  
  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  today = new Date();
  todaydate: string;

  momentdate;
  closeResult: string;

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }),
    ],
    zoom: 10,
    center: latLng(2.67994, 101.968953),
  };

  constructor(public zone: NgZone, private modalService: BsModalService) {}

  ngOnInit() {
    this.todaydate = this.yearMonthDate();

    setInterval(() => {
      this.momentdate = moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
    });
  }

  yearMonthDate() {
    let year = this.today.getFullYear();

    let month = this.today.getMonth();
    let monthstring = month < 10 ? "0" + month : month.toString();

    let date = this.today.getDate();
    let datestring = date < 10 ? "0" + date : date.toString();

    return (
      this.day[this.today.getDay()] +
      " " +
      year +
      "-" +
      monthstring +
      "-" +
      datestring
    );
  }

  onMapReady(map) {
    let arrayLocation = [
      {
        lat: 2.67994,
        long: 101.968953,
      },
      {
        lat: 2.585634,
        long: 102.091898,
      },
      {
        lat: 2.796132,
        long: 102.407966,
      },
      {
        lat: 2.96598,
        long: 102.103375,
      },
      {
        lat: 2.74897,
        long: 102.24101,
      },
      {
        lat: 2.817147,
        long: 101.910497,
      },
    ];

    for (let i = 0; i < arrayLocation.length; i++) {
      marker([arrayLocation[i].lat, arrayLocation[i].long], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: "../../assets/img/marker/location.svg",
        }),
      }).addTo(map);
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    this.modalRef.hide();
  }

  successSwal1(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
  }

  approve() {
    swal
      .fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Yes, approve it!",
        cancelButtonClass: "btn btn-secondary",
      })
      .then((result) => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Approved!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary",
          });
        }
      });
  }

  delete() {
    swal
      .fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: "btn btn-danger",
        confirmButtonText: "Yes, delete it!",
        cancelButtonClass: "btn btn-secondary",
      })
      .then((result) => {
        if (result.value) {
          // Show confirmation
          swal.fire({
            title: "Deleted!",
            // text: "Your file has been deleted.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-primary",
          });
        }
      });
  }
}
