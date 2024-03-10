import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'CAPTURA - Página princial'
    },
    {
        path: 'how-to-use',
        component: HowToUseComponent,
        title: 'CAPTURA - Cómo funciona'
    }
];
