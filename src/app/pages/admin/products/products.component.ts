import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  productObj: any = {
    "productId":0,
    "productSku":"",
    "productName":"",
    "productPrice":0,
    "productShortName":"",
    "productDescription":"",
    "createdDate": new Date(),
    "deliveryTime":"",
    "categoryId":0,
    "productImageUrl":"",
  
  };
  categoryList: any = []=[];
  ProductList: any = []=[];
  constructor(private productSrv: ProductService) { 


  }
  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
    
  }
  getProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }
  onSave(){
    this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
      if(res.result){
        alert("product created")
        this.getProducts();
      }else {
        alert(res.message)
      }

    })
  }
  

  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

}
