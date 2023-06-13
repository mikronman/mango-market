import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Modules
import { BlogModule } from './blog/blog.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ValuesComponent } from './components/values/values.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ValuesComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    FooterComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BlogModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
