import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NgZorroModule } from './ng-zorro.module';
import { AppRoutingModule } from './app.routes';
import { NgZorroIconModule } from './ng-zorro-icon.module';
import { declarations } from './declare-component';

registerLocaleData(en);

@NgModule({
    imports: [BrowserModule, CommonModule, FormsModule, NgZorroModule, AppRoutingModule, NgZorroIconModule],
    declarations: declarations,
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
        provideAnimationsAsync(),
        provideHttpClient()
    ],
})

export class AppModule {
}
