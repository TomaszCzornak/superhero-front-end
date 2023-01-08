import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { AntiHeroFormComponent } from './components/anti-hero-form/anti-hero-form.component';
import { AntiHeroListComponent } from './components/anti-hero-list/anti-hero-list.component';
import {AntiHeroRoutingModule} from "./anti-hero-routing.module";
import {AntiHeroCommandBarComponent} from "./components/anti-hero-command-bar/anti-hero-command-bar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {AntiHeroEffects} from "./state/anti-hero.effects";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {antiHeroReducer} from "./state/anti-hero.reducers";



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
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forFeature('antiHeroState', antiHeroReducer),
    EffectsModule.forFeature([AntiHeroEffects])
  ]
})
export class AntiHeroModule { }
