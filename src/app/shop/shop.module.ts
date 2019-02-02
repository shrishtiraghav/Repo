import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShopPage } from './shop.page';
import { OrdersPage } from '../orders/orders.page';
import { PendingPage } from '../pending/pending.page';
import { DonePage } from '../done/done.page';


const routes: Routes = [

  {
    path: '',
    component: ShopPage,
  children:[
    {
    path:'',
    redirectTo:'shop',
    pathMatch:'full',
    },
    
    {
      path:'orders',
      outlet:'orders',
      component: OrdersPage
    },
    {
      path:'pending',
      outlet:'pending',
      component: PendingPage
    },
    {
      path:'done',
      outlet:'done',
      component: DonePage
    },
  ]
  },
  {
    path:'',
    redirectTo:'shop',
    pathMatch:'full',
    },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPage,
    PendingPage,
    DonePage,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
