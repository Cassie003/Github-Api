"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RepositoryComponent = void 0;
var core_1 = require("@angular/core");
var RepositoryComponent = /** @class */ (function () {
    function RepositoryComponent(githubservice) {
        var _this = this;
        this.githubservice = githubservice;
        this.githubservice.getRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    }
    RepositoryComponent.prototype.ngOnInit = function () {
    };
    RepositoryComponent = __decorate([
        core_1.Component({
            selector: 'app-repository',
            templateUrl: './repository.component.html',
            styleUrls: ['./repository.component.css']
        })
    ], RepositoryComponent);
    return RepositoryComponent;
}());
exports.RepositoryComponent = RepositoryComponent;
