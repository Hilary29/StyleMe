import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StylistDashboardLayoutComponent } from './layouts/stylist-dashboard-layout/stylist-dashboard-layout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { MeasurementsComponent } from './pages/measurements/measurements.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { AddressesComponent } from './pages/addresses/addresses.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

// Ajouter des composants spécifiques pour les fonctionnalités stylistes
import { StylistOrdersComponent } from './pages/stylist-orders/stylist-orders.component';
import { StylistCreationsComponent } from './pages/stylist-creations/stylist-creations.component';
import { StylistAvailabilityComponent } from './pages/stylist-availability/stylist-availability.component';
import { StylistDashboardHomeComponent } from './pages/stylist-dashboard-home/stylist-dashboard-home.component';
import { StylistSettingsComponent } from './pages/stylist-settings/stylist-settings.component';
import { StylistPaymentsComponent } from './pages/stylist-payments/stylist-payments.component';
import { StylistCollectionsComponent } from './pages/stylist-collections/stylist-collections.component';

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
        component: OrdersComponent,
      },
      {
        path: 'measurements',
        component: MeasurementsComponent,
      },
      {
        path: 'tracking',
        component: TrackingComponent,
      },
      {
        path: 'addresses',
        component: AddressesComponent,
      },
      {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full',
      },
    ],
  },
  // Nouvelle section pour le styliste
  {
    path: 'stylist-dashboard',
    component: StylistDashboardLayoutComponent,
    children: [
      {
        path: '',
        component: StylistDashboardHomeComponent, // Page d'accueil du tableau de bord styliste
      },
      {
        path: 'orders',
        component: StylistOrdersComponent, // Gestion des commandes
      },
      {
        path: 'creations',
        component: StylistCreationsComponent, // Créations stylistiques
      },
      {
        path: 'availability',
        component: StylistAvailabilityComponent, // Gestion des disponibilités
      },
      {
        path: 'collections',
        component: StylistCollectionsComponent,
      },
      {
        path: 'payments',
        component: StylistPaymentsComponent,
      },
      {
        path: 'settings',
        component: StylistSettingsComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
