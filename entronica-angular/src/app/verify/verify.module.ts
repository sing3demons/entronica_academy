import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms'

import { VerifyRoutingModule } from './verify-routing.module'

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, VerifyRoutingModule],
  exports: [LoginComponent],
})
export class VerifyModule {}
