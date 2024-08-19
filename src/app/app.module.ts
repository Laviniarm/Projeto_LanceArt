import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ObrasDeArteModule } from './obras-de-arte/obras-de-arte.module';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObrasDeArteModule,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatIcon,
    MatIconButton,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
