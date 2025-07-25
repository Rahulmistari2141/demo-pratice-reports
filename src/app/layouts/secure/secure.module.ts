import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SecureComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    FormsModule
  ]
})
export class SecureModule { }
