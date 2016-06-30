System.register(['@angular/core', '@angular/platform-browser-dynamic', '@angular/router', '@angular/http', './app/app.component', './app/lessons/shared/lesson.service', './app/dictionary/shared/dictionary.service', './app/shared/localStorage.service', 'hammerjs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, router_1, http_1, app_component_1, lesson_service_1, dictionary_service_1, localStorage_service_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (lesson_service_1_1) {
                lesson_service_1 = lesson_service_1_1;
            },
            function (dictionary_service_1_1) {
                dictionary_service_1 = dictionary_service_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS, [http_1.HTTP_PROVIDERS, lesson_service_1.LessonService, localStorage_service_1.LocalStorageService, dictionary_service_1.DictionaryService]
            ]);
        }
    }
});
