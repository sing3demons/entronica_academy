import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EaUserListComponent } from './ea-user-list/ea-user-list.component'

@NgModule({
  declarations: [EaUserListComponent],
  imports: [CommonModule],
  exports: [EaUserListComponent],
})
export class EaUserModule {}
