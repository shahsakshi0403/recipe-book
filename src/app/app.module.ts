import { AlertComponent } from './shared/alert/alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthComponent } from './auth/auth.component';

// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

//import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
//import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
//import { DropdownDirective } from './shared/dropdown.directive';

//import { ShoppingListService } from './shopping-list/shopping-list.service';
//import { RecipeService } from './recipes/recipe.service';
//import { AuthInterceptorService } from './auth/auth-interceptor.service';
//import { RecipesModule } from './recipes/recipes.module';
//import { ShoppingListModule } from './shopping-list/shopping-list.module';
//import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //AuthComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // RecipeStartComponent,
    // RecipeEditComponent,

    // ShoppingListComponent,
    // ShoppingEditComponent,

    //LoadingSpinnerComponent,
    //AlertComponent,
    //PlaceholderDirective
    //DropdownDirective,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(fromApp.appReducer),
    BrowserModule,
    //FormsModule,
    //ReactiveFormsModule,
    //RecipesModule,
    //ShoppingListModule,
    //AuthModule,
  ],
  providers: [
    LoggingService
    // ShoppingListService,
    // RecipeService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
