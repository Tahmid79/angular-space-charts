import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";

const exports:any = [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatExpansionModule, MatListModule, MatMenuModule, MatFormFieldModule, MatTooltipModule, MatInputModule, MatSelectModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatDialogModule] ;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], exports: []
})
export class MaterialModule { }
