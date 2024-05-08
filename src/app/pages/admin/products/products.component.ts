import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isSidePanelVisible: boolean = false;
  // productObj: any = {
  //   "productId":0,
  //   "productSku":"",
  //   "productName":"",
  //   "productPrice":0,
  //   "productShortName":"",
  //   "productDescription":"",
  //   "createdDate": new Date(),
  //   "deliveryTime":"",
  //   "categoryId":0,
  //   "productImageUrl":"",
  
  // };

  openSidePanel() {
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

}
