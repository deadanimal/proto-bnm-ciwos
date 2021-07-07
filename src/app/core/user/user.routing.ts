import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserConlogOcrComponent } from './user-conlog-ocr/user-conlog-ocr.component';
import { UserConlogQmsComponent } from './user-conlog-qms/user-conlog-qms.component';
import { UserConlogSupplierComponent } from './user-conlog-supplier/user-conlog-supplier.component';
import { UserConlogWmsComponent } from './user-conlog-wms/user-conlog-wms.component';
import { UserRecissuanceMesComponent } from './user-recissuance-mes/user-recissuance-mes.component';
import { UserRecissuanceProductionPersonalComponent } from './user-recissuance-production-personal/user-recissuance-production-personal.component';
import { UserRecissuanceProductionPlannerComponent } from './user-recissuance-production-planner/user-recissuance-production-planner.component';
import { UserDistributionComponent } from './user-distribution/user-distribution.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'consignment-logistic',
                children: [
                    {
                        path: 'supplier',
                        component: UserConlogSupplierComponent
                    },
                    {
                        path: 'qms',
                        component: UserConlogQmsComponent
                    },
                    {
                        path: 'ocr',
                        component: UserConlogOcrComponent
                    },
                    {
                        path: 'wms',
                        component: UserConlogWmsComponent
                    },
                    
                ]
            },
            {
                path: 'distribution',
                component: UserDistributionComponent
            },
            {
                path: 'receiving-issuance',
                children: [
                    {
                        path: 'production-planner',
                        component: UserRecissuanceProductionPlannerComponent
                    },
                    {
                        path: 'mes',
                        component: UserRecissuanceMesComponent
                    },
                    {
                        path: 'production-personal',
                        component: UserRecissuanceProductionPersonalComponent
                    },
                    
                ]
            },
        ]
    }
]