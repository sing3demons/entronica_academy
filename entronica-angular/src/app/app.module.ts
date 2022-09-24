import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { VerifyModule } from './module/verify/verify.module'
import { UserModule } from './module/user/user.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, VerifyModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
