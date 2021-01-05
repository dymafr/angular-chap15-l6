import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routing";
import { UserFormComponent } from "./user-form/user-form.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReqInterceptor } from "./http.interceptor";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [AppComponent, UserListComponent, UserFormComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
