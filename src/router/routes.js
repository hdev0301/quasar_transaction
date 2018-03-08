
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
    ],
  },

  {
    path: '/transaction/add',
    component: () => import('layouts/AddTransaction/AddTransaction.vue'),
    children: [
      { path: '', component: () => import('pages/Transaction/Transaction.vue') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
