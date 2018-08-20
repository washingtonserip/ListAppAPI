import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './configs/routes';
import { ComponentsModule } from './components/components.module';

import { HomeModule } from './pages/home/home.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HomeModule,
    AuthModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
