import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CaioHomeComponent } from './caio-home/caio-home.component';
import { CaioListComponent } from './caio-list/caio-list.component';
import { RouterModule } from '@angular/router';
import { CaioListService } from './caio-list.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CaioHomeComponent },
      { path: 'list', component: CaioListComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CaioHomeComponent,
    CaioListComponent,
  ],
  providers: [CaioListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
