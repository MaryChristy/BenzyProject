import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';

const materials=[MatFormFieldModule,
MatSelectModule,
MatInputModule,
MatDatepickerModule,
MatExpansionModule,
MatNativeDateModule,
MatMenuModule,
MatSidenavModule,
MatButtonModule,
MatListModule,
MatToolbarModule,
MatIconModule,
MatButtonToggleModule,
MatTooltipModule,
MatRadioModule
]



@NgModule({
  imports: [materials,
    
  ],
  exports:[
   materials
  ]
})
export class MaterialModule { }
