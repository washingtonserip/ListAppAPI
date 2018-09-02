import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './configs/routes';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';
import { PanelModule } from './pages/panel/panel.module';
import { ListModule } from './pages/list/list.module';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './configs/interceptor.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { jwtTokenGetter } from './configs/token';

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
    Interceptor,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
