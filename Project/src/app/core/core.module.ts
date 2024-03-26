import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AuthenticateComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, AuthenticateComponent],
})
export class CoreModule {}
