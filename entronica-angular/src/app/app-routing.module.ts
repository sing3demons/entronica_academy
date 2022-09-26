import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'verify',
    loadChildren: () =>
      import('./verify/verify.module').then(({ VerifyModule }) => VerifyModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(({ UserModule }) => UserModule),
  },
  {
    path: '',
    redirectTo: 'verify/login',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
