import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, RouterModule.forRoot([]), PoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
