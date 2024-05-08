import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { CategoryProductsComponent } from './website/category-products/category-products.component';
import { Router } from 'express';
import { ProductsComponent } from './pages/admin/products/products.component';

export const routes: Routes = [


    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: '',
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component: ProductsComponent
            }
        ]

    }
    
];
