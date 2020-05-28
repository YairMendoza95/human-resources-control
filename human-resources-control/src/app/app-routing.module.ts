import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'certification', loadChildren: () =>
            import('./@pages/certifications/certifications.module').then(m => m.CertificationsModule)
    },
    {
        path: 'type-certification', loadChildren: () =>
            import('./@pages/type-certification/type-certification.module').then(m => m.TypeCertificationModule)
    },
    { path: '', redirectTo: 'certification', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
