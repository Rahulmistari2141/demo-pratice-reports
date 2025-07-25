import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WebHeaderComponent } from './web-header/web-header.component';
import { WebFooterComponent } from './web-footer/web-footer.component';

@NgModule({
  declarations: [
    PublishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublishRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    WebHeaderComponent,
    WebFooterComponent
  ]
})
export class PublishModule {
  
 }
