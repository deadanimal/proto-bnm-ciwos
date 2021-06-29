import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
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
  selector: "app-procurement-vendor-list",
  templateUrl: "./procurement-vendor-list.component.html",
  styleUrls: ["./procurement-vendor-list.component.scss"],
})
export class ProcurementVendorListComponent implements OnInit {
  // Chart
  private chart1: any;
  private chart2: any;

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
      debit: "849.19",
      credit: "754.16",
      netMove: "1111",
      start: "2011/04/25",
      category: "1",
      name: "John",
      status: "12",
      type: "Cash Out",
      reg: "Company 1",
      desc: "Testing",
      scale: "Big",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "1112",
      start: "2011/07/25",
      category: "2",
      name: "Ahmad",
      status: "4",
      type: "Cash Out",
      reg: "Company 1",
      desc: "Cleaning supplies",
      scale: "Small",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "1113",
      start: "2009/01/12",
      category: "3",
      name: "Trish",
      status: "6",
      type: "Cash Out",
      reg: "Company 2",
      desc: "Testing",
      scale: "Big",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "1114",
      start: "2012/03/29",
      category: "4",
      name: "Sara",
      status: "9",
      type: "Cash Out",
      reg: "Company 4",
      desc: "Staff coffee",
      scale: "Big",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "1115",
      start: "2008/11/28",
      category: "5",
      name: "Malek",
      status: "3",
      type: "Cash Out",
      reg: "Company 2",
      desc: "Staff coffee",
      scale: "Medium",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "1116",
      start: "2011/07/25",
      category: "6",
      name: "Cheng Hong",
      status: "14",
      type: "Cash Out",
      reg: "Company 1",
      desc: "Cleaning supplies",
      scale: "Medium",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "1117",
      start: "2008/11/28",
      category: "7",
      name: "Arumugam",
      status: "23",
      type: "Cash Out",
      reg: "Company 1",
      desc: "Testing",
      scale: "Small",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "1118",
      start: "2009/01/12",
      category: "8",
      name: "Ronaldo",
      status: "9",
      type: "Cash Out",
      reg: "Company 5",
      desc: "Testing",
      scale: "Small",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "1119",
      start: "2012/03/29",
      category: "9",
      name: "Neymar",
      status: "3",
      type: "Cash Out",
      reg: "Company 4",
      desc: "Cleaning supplies",
      scale: "Big",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "1121",
      start: "2008/11/28",
      category: "10",
      name: "John",
      status: "4",
      type: "Cash Out",
      reg: "Company 5",
      desc: "Staff coffee",
      scale: "Medium",
    },
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "1122",
      start: "2011/04/25",
      category: "1",
      name: "John",
      status: "11",
      type: "Cash Out",
      reg: "Company 3",
      desc: "Testing",
      scale: "Big",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "1123",
      start: "2009/01/12",
      category: "2",
      name: "John",
      status: "6",
      type: "Cash Out",
      reg: "Company 4",
      desc: "Cleaning supplies",
      scale: "Medium",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "1124",
      start: "2012/03/29",
      category: "3",
      name: "John",
      status: "3",
      type: "Cash Out",
      reg: "Company 1",
      desc: "Testing",
      scale: "Small",
    },
    {
      accNo: "ACC-120-MJM",
      debit: "136.34",
      credit: "916.82",
      netMove: "1125",
      start: "2008/11/28",
      category: "4",
      name: "John",
      status: "19",
      type: "Cash Out",
      reg: "Company 1",
      desc: "Testing",
      scale: "Big",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "1126",
      start: "2009/01/12",
      category: "5",
      name: "John",
      status: "12",
      type: "Cash Out",
      reg: "Company 6",
      desc: "Cleaning supplies",
      scale: "Medium",
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

  ngOnInit() {}

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

  openModal(modalRef: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalRef, this.modalConfig);
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
