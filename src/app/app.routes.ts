import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { MeasurementsComponent } from './pages/measurements/measurements.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'products-list',
    component: ProductsListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
   
        {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'measurements',
        component: MeasurementsComponent
      },
      {
        path: 'tracking',
        component: TrackingComponent
      },
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        children: [
          {
            path: 'orders',
            component: OrdersComponent
          },
          {
            path: 'measurements',
            component: MeasurementsComponent
          },
          {
            path: 'tracking',
            component: TrackingComponent
          },
          {
            path: 'addresses',
            component: AddressesComponent
          },
          {
            path: '',
            redirectTo: 'orders',
            pathMatch: 'full'
          }
        ]
      }
    ]
  }
];
