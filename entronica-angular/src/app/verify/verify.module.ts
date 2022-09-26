import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms'

import { VerifyRoutingModule } from './verify-routing.module';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, VerifyRoutingModule],
  exports: [LoginComponent],
})
export class VerifyModule {}
