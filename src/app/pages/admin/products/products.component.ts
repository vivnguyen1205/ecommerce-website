import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class ProductsComponent {
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
  
  }
  constructor(private productSrv: ProductService) { 


  }


  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

}
