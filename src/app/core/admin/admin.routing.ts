import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'procurement',
                children: [
                    {
                        path: 'vendor-list',
                        component: ProcurementVendorListComponent
                    },
                    {
                        path: 'strategic-sourcing',
                        component: ProcurementStrategicSourcingComponent
                    },
                    {
                        path: 'procurement-management',
                        component: ProcurementProcurementManagementComponent
                    },
                    {
                        path: 'tender-management',
                        component: ProcurementTenderManagementComponent
                    },
                    
                ]
            },
            {
                path: 'consignment-logistic',
                children: [
                    {
                        path: 'supplier',
                        component: ConsignmentLogisticSupplierComponent
                    },
                    {
                        path: 'qms',
                        component: ConsignmentLogisticQmsComponent
                    },
                    {
                        path: 'ocr',
                        component: ConsignmentLogisticOcrComponent
                    },
                    {
                        path: 'wms',
                        component: ConsignmentLogisticWmsComponent
                    },
                    
                ]
            },
            {
                path: 'iventory',
                children: [
                    {
                        path: 'general-management',
                        component: IventoryGeneralManagementComponent
                    },
                    {
                        path: 'placement-movement',
                        component: IventoryPlacementMovementComponent
                    },
                    
                ]
            },
            {
                path: 'distribution',
                component: DistributionComponent
            },
            {
                path: 'receiving-issuance',
                children: [
                    {
                        path: 'production-planner',
                        component: ReceivingIssuanceProductionPlannerComponent
                    },
                    {
                        path: 'mes',
                        component: ReceivingIssuanceMesComponent
                    },
                    {
                        path: 'production-personal',
                        component: ReceivingIssuanceProductionPersonalComponent
                    },
                    
                ]
            },
            {
                path: 'quality',
                children: [
                    {
                        path: 'dashboard',
                        component: QualityDashboardComponent
                    },
                    {
                        path: 'approve-blank-coin',
                        component: QualityApprovedBlankCoinComponent
                    },
                    {
                        path: 'approve-blank-note',
                        component: QualityApprovedBlankNoteComponent
                    },
                    {
                        path: 'soil-test',
                        component: QualitySoilTestLevelComponent
                    },
                    {
                        path: 'report',
                        component: QualityReportingComponent
                    },
                    
                ]
            },
            {
                path: 'counterfeit',
                children: [
                    {
                        path: 'approve-assesment',
                        component: CounterfeitApproveAssesmentComponent
                    },
                    {
                        path: 'report',
                        component: CounterfeitReportingComponent
                    },
                    
                ]
            },
            {
                path: 'submission',
                children: [
                    {
                        path: 'data-submission',
                        component: SubmissionDataSubmissionComponent
                    },
                    {
                        path: 'coin-stock',
                        component: SubmissionCoinStockComponent
                    },
                    {
                        path: 'data-collection',
                        component: SubmissionDataCollectionComponent
                    },
                    {
                        path: 'report',
                        component: SubmissionReportingComponent
                    },
                    
                ]
            },

            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }

                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]