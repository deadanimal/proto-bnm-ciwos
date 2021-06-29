import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import swal from "sweetalert2";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-counterfeit-approve-assesment",
  templateUrl: "./counterfeit-approve-assesment.component.html",
  styleUrls: ["./counterfeit-approve-assesment.component.scss"],
})
export class CounterfeitApproveAssesmentComponent implements OnInit {
  // Chart
  private chart1: any;
  private chart2: any;

  //datepicker
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  // Modal
  modalRef: BsModalRef;
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
      name: "Ahmad Taufik",
      dateissue: "01/04/2020",
      datetest: "12/02/2020",
      denomination: "120",
      amount: "120",
      series: "Series 1"
    },
    {
      accNo: "ACC-119-VLJ",
      name: "Aliya Ali",
      dateissue: "03/09/2019",
      datetest: "12/12/2019",
      denomination: "235",
      amount: "214",
      series: "Series 2"
    },
    {
      accNo: "ACC-635-KDJ",
      name: "Stephen Mosby",
      dateissue: "30/07/2019",
      datetest: "05/08/2019",
      denomination: "453",
      amount: "325",
      series: "Series 3"
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone, private modalService: BsModalService) {
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
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      // this.getChartAdminQualitySoil1();
      // this.getChartAdminQualitySoil2();
    });
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
    this.modalRef = this.modalService.show(template);
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
    this.modalRef.hide();
  }
}
