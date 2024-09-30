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
import { HomeComponent } from './shared/components/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CarrosselComponent } from './shared/components/carrossel/carrossel.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../firebase.config';
import { ListagemGeralComponent } from './shared/components/listagem-geral/listagem-geral.component';
import { MatCardModule, MatCard } from '@angular/material/card';
import {ErroInterceptor} from "./ErroInterceptor";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrosselComponent,
    HomeComponent,
    ListagemGeralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObrasDeArteModule,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatIcon,
    MatIconButton,
    HttpClientModule,
    FirestoreModule,
    AuthModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatCard,
    MatCardModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi: true },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
