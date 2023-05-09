import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { AuthComponent } from "./auth/auth.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeroComponent,
        ListComponent,
        AuthComponent
    ],
    exports:[
        HeroComponent,
        ListComponent,
        AuthComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}