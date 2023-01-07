import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { AntiHeroFormComponent } from './components/anti-hero-form/anti-hero-form.component';
import { AntiHeroListComponent } from './components/anti-hero-list/anti-hero-list.component';
import {AntiHeroRoutingModule} from "./anti-hero-routing.module";
import {AntiHeroCommandBarComponent} from "./components/anti-hero-command-bar/anti-hero-command-bar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    AntiHeroFormComponent,
    AntiHeroListComponent,
    AntiHeroCommandBarComponent
  ],
  imports: [
    CommonModule,
    AntiHeroRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MaterialModule
  ]
})
export class AntiHeroModule { }
