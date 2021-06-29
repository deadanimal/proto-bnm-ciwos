import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
import { Audit } from "src/assets/mock/admin-audit/audit.model";
import { MocksService } from "src/app/shared/services/mocks/mocks.service";
// import { AuditData } from 'src/assets/mock/admin-audit/audit.data.json'
import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

//
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import swal from "sweetalert2";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { AuthService } from "src/app/shared/services/auth/auth.service";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { Router, ActivatedRoute } from "@angular/router";
import { tileLayer, latLng, marker, icon } from "leaflet";
import { BsDropdownConfig } from "ngx-bootstrap/dropdown";
import "leaflet/dist/images/marker-shadow.png";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-iventory-general-management",
  templateUrl: "./iventory-general-management.component.html",
  styleUrls: ["./iventory-general-management.component.scss"],
})
export class IventoryGeneralManagementComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;

  // Datepicker
  bsDPConfig = {
    isAnimated: true,
    containerClass: "theme-default",
  };

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: Audit[] = [];
  SelectionType = SelectionType;
  listRoles: any = [
    {
      name: "Coin 1.1",
      owner: "Afizi",
      health: "AC",
      budget: "RM 301,900.00",
      expenses: "RM 150,000.00",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      name: "Note 2.4",
      owner: "Amin",
      health: "PE",
      budget: "RM 165,800.00",
      expenses: "70,000.00",
      created_at: "2019-07-27T01:07:14Z",
    },
    {
      name: "Empty Pallet",
      owner: "Husaini",
      health: "CA",
      budget: "RM 139,900.00",
      expenses: "RM 65,000.00",
      created_at: "2019-07-27T01:07:14Z",
    },
  ];

  constructor(
    private mockService: MocksService,
    private notifyService: NotifyService,
    private zone: NgZone,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private loadingBar: LoadingBarService,
    private router: Router,
    private _route: ActivatedRoute
  ) {
    this.getData();
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        this.chart1.dispose();
      }
    });
  }

  getData() {
    // this.mockService.getAll(this.listFee).subscribe(
    //   (res) => {
    //     // Success
    //     this.tableRows = [...res];
    //     this.tableTemp = this.tableRows.map((prop, key) => {
    //       return {
    //         ...prop,
    //         id: key,
    //       };
    //     });
    //     console.log("Svc: ", this.tableTemp);
    //   },
    //   () => {
    //     // Unsuccess
    //   },
    //   () => {
    //     // After
    //     this.getChart();
    //   }
    // );
  }

  openModal(modalRef: TemplateRef<any>, row) {
    // if (row) {
    //   console.log(row);
    //   this.editActionForm.patchValue(row);
    // }
    // this.modal = this.modalService.show(
    //   modalRef,
    //   Object.assign({}, { class: "gray modal-xl" })
    // );
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    // this.editActionForm.reset();
  }

  successMessage() {
    let title = "Success";
    let message = "Create New Action";
    this.notifyService.openToastr(title, message);
  }

  successEditMessage() {
    let title = "Success";
    let message = "Edit Action";
    this.notifyService.openToastr(title, message);
  }

  errorAlert(task) {
    swal.fire({
      title: "Error",
      text: "Cannot " + task + " Action, Please Try Again!",
      type: "error",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-danger",
      confirmButtonText: "Close",
    });
  }

  successAlert(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task,
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
    this.modal.hide();
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.initChart();
    });
  }
  initChart() {
    let chart = am4core.create("chartdivadminiventorygeneralmanagement1", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    /// change
    pieSeries.radius = 60;

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer",
      },
    ];

    pieSeries.alignLabels = false;
    // pieSeries.labels.template.bent = true;
    // pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    // chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Notes",
        litres: 301.9,
      },
      {
        country: "Coins",
        litres: 165.8,
      },
      {
        country: "Local Specimen",
        litres: 139.9,
      },
      {
        country: "Empty Pallet",
        litres: 115.5,
      },
    ];

    this.chart1 = chart;
  }
}
