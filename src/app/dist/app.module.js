"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var github_service_1 = require("./github.service");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var navbar_component_1 = require("./navbar/navbar.component");
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var class_component_1 = require("./class/class.component");
var repository_component_1 = require("./repository/repository.component");
var forms_1 = require("@angular/forms");
var date_count_pipe_1 = require("./date-count.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                user_component_1.UserComponent,
                class_component_1.ClassComponent,
                repository_component_1.RepositoryComponent,
                date_count_pipe_1.DateCountPipe,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [github_service_1.GithubService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
