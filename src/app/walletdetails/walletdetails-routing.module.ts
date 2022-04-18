import { NgModule } from "@angular/core";
    import { Routes } from "@angular/router";
    import { NativeScriptRouterModule } from "nativescript-angular/router";
    
    import { WalletdetailsComponent } from "./walletdetails.component";
    
    const routes: Routes = [
        { path: "", component: WalletdetailsComponent }
    ];
    
    @NgModule({
        imports: [NativeScriptRouterModule.forChild(routes)],
        exports: [NativeScriptRouterModule]
    })
    export class WalletdetailsRoutingModule { }
