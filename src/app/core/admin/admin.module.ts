import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CdkStepperModule } from "@angular/cdk/stepper";
import { MatStepperModule } from "@angular/material/stepper"; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { ProcurementVendorListComponent } from './procurement-vendor-list/procurement-vendor-list.component';
import { ProcurementStrategicSourcingComponent } from './procurement-strategic-sourcing/procurement-strategic-sourcing.component';
import { ProcurementProcurementManagementComponent } from './procurement-procurement-management/procurement-procurement-management.component';
import { ProcurementTenderManagementComponent } from './procurement-tender-management/procurement-tender-management.component';
import { ConsignmentLogisticSupplierComponent } from './consignment-logistic-supplier/consignment-logistic-supplier.component';
import { ConsignmentLogisticQmsComponent } from './consignment-logistic-qms/consignment-logistic-qms.component';
import { ConsignmentLogisticOcrComponent } from './consignment-logistic-ocr/consignment-logistic-ocr.component';
import { ConsignmentLogisticWmsComponent } from './consignment-logistic-wms/consignment-logistic-wms.component';
import { IventoryGeneralManagementComponent } from './iventory-general-management/iventory-general-management.component';
import { IventoryPlacementMovementComponent } from './iventory-placement-movement/iventory-placement-movement.component';
import { DistributionComponent } from './distribution/distribution.component';
import { ReceivingIssuanceProductionPlannerComponent } from './receiving-issuance-production-planner/receiving-issuance-production-planner.component';
import { ReceivingIssuanceMesComponent } from './receiving-issuance-mes/receiving-issuance-mes.component';
import { ReceivingIssuanceProductionPersonalComponent } from './receiving-issuance-production-personal/receiving-issuance-production-personal.component';
import { QualityDashboardComponent } from './quality-dashboard/quality-dashboard.component';
import { QualityApprovedBlankCoinComponent } from './quality-approved-blank-coin/quality-approved-blank-coin.component';
import { QualityApprovedBlankNoteComponent } from './quality-approved-blank-note/quality-approved-blank-note.component';
import { QualitySoilTestLevelComponent } from './quality-soil-test-level/quality-soil-test-level.component';
import { QualityReportingComponent } from './quality-reporting/quality-reporting.component';
import { CounterfeitApproveAssesmentComponent } from './counterfeit-approve-assesment/counterfeit-approve-assesment.component';
import { CounterfeitReportingComponent } from './counterfeit-reporting/counterfeit-reporting.component';
import { SubmissionDataSubmissionComponent } from './submission-data-submission/submission-data-submission.component';
import { SubmissionCoinStockComponent } from './submission-coin-stock/submission-coin-stock.component';
import { SubmissionDataCollectionComponent } from './submission-data-collection/submission-data-collection.component';
import { SubmissionReportingComponent } from './submission-reporting/submission-reporting.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    ProcurementVendorListComponent,
    ProcurementStrategicSourcingComponent,
    ProcurementProcurementManagementComponent,
    ProcurementTenderManagementComponent,
    ConsignmentLogisticSupplierComponent,
    ConsignmentLogisticQmsComponent,
    ConsignmentLogisticOcrComponent,
    ConsignmentLogisticWmsComponent,
    IventoryGeneralManagementComponent,
    IventoryPlacementMovementComponent,
    DistributionComponent,
    ReceivingIssuanceProductionPlannerComponent,
    ReceivingIssuanceMesComponent,
    ReceivingIssuanceProductionPersonalComponent,
    QualityDashboardComponent,
    QualityApprovedBlankCoinComponent,
    QualityApprovedBlankNoteComponent,
    QualitySoilTestLevelComponent,
    QualityReportingComponent,
    CounterfeitApproveAssesmentComponent,
    CounterfeitReportingComponent,
    SubmissionDataSubmissionComponent,
    SubmissionCoinStockComponent,
    SubmissionDataCollectionComponent,
    SubmissionReportingComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    MatStepperModule,
    CdkStepperModule,
    RouterModule.forChild(AdminRoutes),
    LeafletModule
  ]
})
export class AdminModule { }
