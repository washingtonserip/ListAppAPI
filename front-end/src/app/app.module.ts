import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './configs/routes';
import { ComponentsModule } from './components/components.module';

import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';
import { PanelModule } from './pages/panel/panel.module';
import { ListModule } from './pages/list/list.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HomeModule,
    AuthModule,
    PanelModule,
    ListModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
