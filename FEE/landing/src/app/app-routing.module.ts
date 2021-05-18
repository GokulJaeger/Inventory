import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeskComponent } from './component/dashboard/admin-desk/admin-desk.component';
import { CheckerDeskComponent } from './component/dashboard/checker-desk/checker-desk.component';
import { SellerDeskComponent } from './component/dashboard/seller-desk/seller-desk.component';
import { VendorDeskComponent } from './component/dashboard/vendor-desk/vendor-desk.component';
import { WarehouseDeskComponent } from './component/dashboard/warehouse-desk/warehouse-desk.component';


import { OrderhistoryComponent } from './component/desk/admin-desk-items/orderhistory/orderhistory.component';
import { PaymentComponent } from './component/desk/admin-desk-items/payment/payment.component';
import { RequestsupplyComponent } from './component/desk/admin-desk-items/requestsupply/requestsupply.component';
import { ShelfstockComponent } from './component/desk/admin-desk-items/shelfstock/shelfstock.component';
import { SupplylistComponent } from './component/desk/admin-desk-items/supplylist/supplylist.component';
import { UsermanagementComponent } from './component/desk/admin-desk-items/usermanagement/usermanagement.component';
import { UserprofileComponent } from './component/desk/admin-desk-items/userprofile/userprofile.component';
import { WarehousestockComponent } from './component/desk/admin-desk-items/warehousestock/warehousestock.component';
import { CheckerdamageComponent } from './component/desk/checker-desk-items/checkerdamage/checkerdamage.component';
import { IncomingstockComponent } from './component/desk/checker-desk-items/incomingstock/incomingstock.component';
import { ReporttomanagerComponent } from './component/desk/checker-desk-items/reporttomanager/reporttomanager.component';
import { ShopinstockComponent } from './component/desk/checker-desk-items/shopinstock/shopinstock.component';
import { WareinstockComponent } from './component/desk/checker-desk-items/wareinstock/wareinstock.component';
import { ApproveRequestComponent } from './component/desk/seller-desk-items/approve-request/approve-request.component';
import { CheckdamagestockComponent } from './component/desk/seller-desk-items/checkdamagestock/checkdamagestock.component';
import { ViewRequestComponent } from './component/desk/seller-desk-items/view-request/view-request.component';
import { ApprovelistComponent } from './component/desk/vendor-desk-items/approvelist/approvelist.component';
import { DamagestockComponent } from './component/desk/vendor-desk-items/damagestock/damagestock.component';
import { ReporttosuppilierComponent } from './component/desk/vendor-desk-items/reporttosuppilier/reporttosuppilier.component';
import { ReporttoadminComponent } from './component/desk/ware-desk-items/reporttoadmin/reporttoadmin.component';
import { ShopgoodsComponent } from './component/desk/ware-desk-items/shopgoods/shopgoods.component';
import { WargoodsComponent } from './component/desk/ware-desk-items/wargoods/wargoods.component';

import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/login/admin/admin.component';
import { SellerComponent } from './component/login/seller/seller.component';
import { WarehouseComponent } from './component/login/warehouse/warehouse.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';





const routes: Routes = [  
  { path: '',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'vendor',component:SellerComponent},
  {path:'warehouse',component:WarehouseComponent},
  {path: 'back',component:HomeComponent},
  {path:'admindesk',component:AdminDeskComponent},
  {path:'vendordesk',component:VendorDeskComponent},
  {path:'checkerdesk',component:CheckerDeskComponent},
  {path:'warehousedesk',component:WarehouseDeskComponent},
  {path: 'sellerdesk',component:SellerDeskComponent},
  {path: 'request',component:RequestsupplyComponent},
  {path: 'supply',component:SupplylistComponent},
  {path: 'shelf',component:ShelfstockComponent},
  {path: 'user',component:UserprofileComponent},
  {path: 'warestock',component:WarehousestockComponent},
  {path: 'oderhistory',component:OrderhistoryComponent},
  {path: 'usermanagement',component:UsermanagementComponent},
  {path: 'pay',component:PaymentComponent},
  {path: 'View',component:ViewRequestComponent},
  {path: 'Approve',component:ApproveRequestComponent},
  {path: 'Check',component:CheckdamagestockComponent},
  {path: 'Approvelist',component:ApprovelistComponent},
  {path: 'reportsuppiler',component:ReporttosuppilierComponent},
  {path: 'damagestock',component:DamagestockComponent},
  {path: 'reportmanager',component:ReporttomanagerComponent},
  {path: 'shopin',component:ShopinstockComponent},
  {path: 'warin',component:WareinstockComponent},
  {path: 'damagechecker',component:CheckerdamageComponent},
  {path: 'incoming',component:IncomingstockComponent},
  {path: 'mware',component:WargoodsComponent},
  {path: 'mshop',component:ShopgoodsComponent},
  {path: 'mreport',component:ReporttoadminComponent},
  
  
  {path: '**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
