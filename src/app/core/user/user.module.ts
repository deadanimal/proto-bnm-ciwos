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

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserConlogOcrComponent } from './user-conlog-ocr/user-conlog-ocr.component';
import { UserConlogQmsComponent } from './user-conlog-qms/user-conlog-qms.component';
import { UserConlogSupplierComponent } from './user-conlog-supplier/user-conlog-supplier.component';
import { UserConlogWmsComponent } from './user-conlog-wms/user-conlog-wms.component';
import { UserRecissuanceMesComponent } from './user-recissuance-mes/user-recissuance-mes.component';
import { UserRecissuanceProductionPersonalComponent } from './user-recissuance-production-personal/user-recissuance-production-personal.component';
import { UserRecissuanceProductionPlannerComponent } from './user-recissuance-production-planner/user-recissuance-production-planner.component';
import { UserDistributionComponent } from './user-distribution/user-distribution.component';

@NgModule({
  declarations: [DashboardComponent, UserConlogOcrComponent, UserConlogQmsComponent, UserConlogSupplierComponent, UserConlogWmsComponent, UserRecissuanceMesComponent, UserRecissuanceProductionPersonalComponent, UserRecissuanceProductionPlannerComponent, UserDistributionComponent],
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
    RouterModule.forChild(UserRoutes),
    CdkStepperModule,
    MatStepperModule
  ]
})
export class UserModule { }
