import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidePackComponent } from './side-pack/side-pack.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidePackComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    HeaderComponent,
    SidePackComponent,
    FooterComponent
  ]
})
export class SiteFrameworkModule { }
