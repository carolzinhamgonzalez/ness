import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterService } from './services/register.service';
import { RegisterComponent } from './register/register.component';

// integração com firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire/firebase.app.module';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';

// import relacionado a style
// import { ToastModule } from 'ng2-toastr';
// import { ToastsManager } from 'ng2-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    // ToastModule.forRoot(),
    // NoopAnimationsModule,

    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment, FirebaseApp),
    AngularFireDatabaseModule,
    AppRoutingModule

  ],
  // providers: [RegisterService, ToastsManager],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
