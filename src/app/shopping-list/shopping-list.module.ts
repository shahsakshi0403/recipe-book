import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.module';
// import { LoggingService } from './../logging.service';


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        //Alternative to browserModule is CommonModule(browserModule imports once and that is 
        //only appmodule) so we can import commonModule instead of browserModule in each file where we need it.
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ])
    ],
    // providers:[LoggingService]
})
export class ShoppingListModule {

}