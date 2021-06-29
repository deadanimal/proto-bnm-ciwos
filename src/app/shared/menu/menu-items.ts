export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-dark'
  },
  {
    path: '/admin/procurement',
    title: 'Procurement',
    type: 'sub',
    icontype: 'fas fa-handshake text-dark',
    collapse: 'procurement',
    isCollapsed: true,
    children: [
      { path: 'vendor-list', title: 'Vendor Lists', type: 'link' },
      { path: 'strategic-sourcing', title: 'Strategic Sourcing', type: 'link' },
      { path: 'procurement-management', title: 'Procurement Management', type: 'link' },
      { path: 'tender-management', title: 'Tender Management', type: 'link' }
    ]
  },
  {
    path: '/admin/consignment-logistic',
    title: 'Consigment & Logistic',
    type: 'sub',
    icontype: 'fas fa-luggage-cart text-dark',
    collapse: 'consignment-logistic',
    isCollapsed: true,
    children: [
      { path: 'supplier', title: 'Supplier', type: 'link' },
      { path: 'qms', title: 'QMS', type: 'link' },
      { path: 'ocr', title: 'OCR', type: 'link' },
      { path: 'wms', title: 'WMS', type: 'link' },
    ]
  },
  {
    path: '/admin/iventory',
    title: 'Iventory Management',
    type: 'sub',
    icontype: 'fas fa-boxes text-dark',
    collapse: 'iventory',
    isCollapsed: true,
    children: [
      { path: 'general-management', title: 'General Management', type: 'link' },
      { path: 'placement-movement', title: 'Placement & Movement', type: 'link' },
    ]
  },
  {
    path: '/admin/distribution',
    title: 'Distribution',
    type: 'link',
    icontype: 'fas fa-people-carry text-dark'
  },
  {
    path: '/admin/receiving-issuance',
    title: 'Receiving & Issuance',
    type: 'sub',
    icontype: 'fas fa-hands-helping text-dark',
    collapse: 'receiving-issuance',
    isCollapsed: true,
    children: [
      { path: 'production-planner', title: 'Production Planner', type: 'link' },
      { path: 'mes', title: 'MES', type: 'link' },
      { path: 'production-personal', title: 'Production Personal', type: 'link' },
    ]
  },
  {
    path: '/admin/quality',
    title: 'Quality Management',
    type: 'sub',
    icontype: 'fas fa-pencil-ruler text-dark',
    collapse: 'quality',
    isCollapsed: true,
    children: [
      { path: 'dashboard', title: 'Dashboard', type: 'link' },
      { path: 'approve-blank-coin', title: 'Approved Blank Coin Pre-Proof Sampling', type: 'link' },
      { path: 'approve-blank-note', title: 'Approved Bank Note Assessment  Sampling', type: 'link' },
      { path: 'soil-test', title: 'Soil Test Level', type: 'link' },
      { path: 'report', title: 'Report', type: 'link' },
    ]
  },
  {
    path: '/admin/counterfeit',
    title: 'Counterfeit Management',
    type: 'sub',
    icontype: 'fas fa-newspaper text-dark',
    collapse: 'counterfeit',
    isCollapsed: true,
    children: [
      { path: 'approve-assesment', title: 'Approve Assesment', type: 'link' },
      { path: 'report', title: 'Report', type: 'link' }
    ]
  },
  {
    path: '/admin/submission',
    title: 'Submission',
    type: 'sub',
    icontype: 'fas fa-paper-plane text-dark',
    collapse: 'submission',
    isCollapsed: true,
    children: [
      { path: 'data-submission', title: 'Data Submission', type: 'link' },
      { path: 'coin-stock', title: 'Coin Stock', type: 'link' },
      { path: 'data-collection', title: 'Data Collection', type: 'link' },
      { path: 'report', title: 'Report', type: 'link' },
    ]
  },


  // {
  //   path: '/admin/management',
  //   title: 'Management',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-pink',
  //   collapse: 'management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
  //     { path: 'user', title: 'User', type: 'link' }
  //   ]
  // },
  // {
  //   path: '/admin/report',
  //   title: 'Reporting',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-red'
  // },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  /*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];