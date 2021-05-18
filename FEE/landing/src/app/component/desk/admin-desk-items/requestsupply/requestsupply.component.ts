import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Model/products';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-requestsupply',
  templateUrl: './requestsupply.component.html',
  styleUrls: ['./requestsupply.component.css']
})
export class RequestsupplyComponent implements OnInit {
products = new Products();
dataarray:any = [];
v:any;
p:any;
vn:string ="";
sn:string ="" ;
a:string="";
  constructor() { }

  ngOnInit(): void {
    this.dataarray.push(this.products);    
  }
  selectChangeHandler(e:any)
  {
    console.log(e.target.value);
    this.v = e.target.value;
    
  }

  selectHandler(e:any)
  {
    console.log(e.target.value);
    this.p = e.target.value;
  
  }
  getvalue(e:any)
  {
  this.a= e.target.value;
  this.vn ="";
  this.sn ="";
    if(this.a == "seller1")
    {
      this.vn ="Latta";
      this.sn ="Muthu";
    }
    if(this.a == "seller2")
    {
      this.vn ="Ram";
      this.sn ="Sham";
    }

    if(this.a == "seller3")
    {
      this.vn ="Gokul";
      this.sn ="Gohan";
    }

    if(this.a == "seller4")
    {
      this.vn ="Kishore";
      this.sn ="Lokesh";
    }

    if(this.a == "seller5")
    {
      this.vn ="Priya";
      this.sn ="Rikitha";
    }

    if(this.a == "seller6")
    {
      this.vn ="Rai";
      this.sn ="Gopal";
    }
  }
  
  reloadCurrentPage() {
    window.location.reload();
   }

   Add(){
  this.products=new Products();
  this.dataarray.push(this.products);

}
submit(){
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Save`,
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
 
}
}
