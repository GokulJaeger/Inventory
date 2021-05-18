import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/login/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { WarehouseComponent } from './component/login/warehouse/warehouse.component';
import { SellerComponent } from './component/login/seller/seller.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarehouseDeskComponent } from './component/dashboard/warehouse-desk/warehouse-desk.component';
import { SellerDeskComponent } from './component/dashboard/seller-desk/seller-desk.component';
import { AdminDeskComponent } from './component/dashboard/admin-desk/admin-desk.component';
import { RequestsupplyComponent } from './component/desk/admin-desk-items/requestsupply/requestsupply.component';
import { OrderhistoryComponent } from './component/desk/admin-desk-items/orderhistory/orderhistory.component';
import { SupplylistComponent } from './component/desk/admin-desk-items/supplylist/supplylist.component';
import { PaymentComponent } from './component/desk/admin-desk-items/payment/payment.component';
import { UsermanagementComponent } from './component/desk/admin-desk-items/usermanagement/usermanagement.component';
import { WarehousestockComponent } from './component/desk/admin-desk-items/warehousestock/warehousestock.component';
import { ShelfstockComponent } from './component/desk/admin-desk-items/shelfstock/shelfstock.component';
import { VendorDeskComponent } from './component/dashboard/vendor-desk/vendor-desk.component';
import { CheckerDeskComponent } from './component/dashboard/checker-desk/checker-desk.component';
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './component/desk/admin-desk-items/userprofile/userprofile.component';
import { ViewRequestComponent } from './component/desk/seller-desk-items/view-request/view-request.component';
import { ApproveRequestComponent } from './component/desk/seller-desk-items/approve-request/approve-request.component';
import { CheckdamagestockComponent } from './component/desk/seller-desk-items/checkdamagestock/checkdamagestock.component';
import { DamagestockComponent } from './component/desk/vendor-desk-items/damagestock/damagestock.component';
import { ApprovelistComponent } from './component/desk/vendor-desk-items/approvelist/approvelist.component';
import { ReporttosuppilierComponent } from './component/desk/vendor-desk-items/reporttosuppilier/reporttosuppilier.component';
import { ReporttomanagerComponent } from './component/desk/checker-desk-items/reporttomanager/reporttomanager.component';
import { ShopinstockComponent } from './component/desk/checker-desk-items/shopinstock/shopinstock.component';
import { WareinstockComponent } from './component/desk/checker-desk-items/wareinstock/wareinstock.component';
import { CheckerdamageComponent } from './component/desk/checker-desk-items/checkerdamage/checkerdamage.component';
import { IncomingstockComponent } from './component/desk/checker-desk-items/incomingstock/incomingstock.component';
import { ReporttoadminComponent } from './component/desk/ware-desk-items/reporttoadmin/reporttoadmin.component';
import { ShopgoodsComponent } from './component/desk/ware-desk-items/shopgoods/shopgoods.component';
import { WargoodsComponent } from './component/desk/ware-desk-items/wargoods/wargoods.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SellerComponent,
    HomeComponent,
    WarehouseComponent,
    SellerComponent,
    WarehouseDeskComponent,
    SellerDeskComponent,
    AdminDeskComponent,
    RequestsupplyComponent,
    OrderhistoryComponent,
    
    SupplylistComponent,
  
    PaymentComponent,
    
    UsermanagementComponent,
    WarehousestockComponent,
    ShelfstockComponent,
    VendorDeskComponent,
    CheckerDeskComponent,
    UserprofileComponent,
    ViewRequestComponent,
    ApproveRequestComponent,
    CheckdamagestockComponent,
    DamagestockComponent,
    ApprovelistComponent,
    ReporttosuppilierComponent,
    ReporttomanagerComponent,
    ShopinstockComponent,
    WareinstockComponent,
    CheckerdamageComponent,
    IncomingstockComponent,
    ReporttoadminComponent,
    ShopgoodsComponent,
    WargoodsComponent,
    PagenotfoundComponent,
    
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollTopModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
