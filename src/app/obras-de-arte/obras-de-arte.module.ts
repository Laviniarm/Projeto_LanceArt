import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ObrasDeArteRoutingModule } from './obras-de-arte-routing.module';
import { ListagemObrasComponent } from './listagem-obras/listagem-obras.component';
import { CadastroObrasComponent } from './cadastro-obras/cadastro-obras.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { CardObraComponent } from './card-obra/card-obra.component';

@NgModule({
  declarations: [
    ListagemObrasComponent,
    CadastroObrasComponent,
    CardObraComponent,
  ],
  imports: [
    CommonModule,
    ObrasDeArteRoutingModule,
    MatLabel,
    MatCardContent,
    MatCard,
    MatFormField,
    MatIconButton,
    MatIcon,
    FormsModule,
    MatCardTitle,
    MatCardActions,
    MatButton,
    MatInput,
    NgOptimizedImage,
    MatCardHeader,
  ],
})
export class ObrasDeArteModule {}
