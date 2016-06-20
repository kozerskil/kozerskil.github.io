System.config({
    "bundles": {
        "build/bundle.js": [
            "build/app/app.component.js",
            "build/app/design/design.component.js",
            "build/app/home/home-screen.component.js",
            "build/app/lessons/lesson-screen.component.js",
            "build/app/lessons/lessons-screen.component.js",
            "build/app/lessons/repetition-screen.component.js",
            "build/app/lessons/shared/lesson-card.component.js",
            "build/app/lessons/shared/lesson.data.js",
            "build/app/lessons/shared/lesson.service.js",
            "build/app/lessons/shared/memo-card.component.js",
            "build/app/lessons/shared/memos.js",
            "build/app/other/other.component.js",
            "build/app/shared/localStorage.service.js",
            "build/app/shared/navigation.component.js",
            "build/app/shared/rxjs-operators.js",
            "build/main.js",
            "node_modules/@angular/common/common.umd.js",
            "node_modules/@angular/compiler/compiler.umd.js",
            "node_modules/@angular/core/core.umd.js",
            "node_modules/@angular/http/http.umd.js",
            "node_modules/@angular/platform-browser-dynamic/platform-browser-dynamic.umd.js",
            "node_modules/@angular/platform-browser/platform-browser.umd.js",
            "node_modules/@angular/router/router.umd.js",
            "node_modules/hammerjs/hammer.js",
            "node_modules/rxjs/Observable.js",
            "node_modules/rxjs/Observer.js",
            "node_modules/rxjs/Subject.js",
            "node_modules/rxjs/SubjectSubscription.js",
            "node_modules/rxjs/Subscriber.js",
            "node_modules/rxjs/Subscription.js",
            "node_modules/rxjs/add/operator/catch.js",
            "node_modules/rxjs/add/operator/map.js",
            "node_modules/rxjs/observable/PromiseObservable.js",
            "node_modules/rxjs/operator/catch.js",
            "node_modules/rxjs/operator/map.js",
            "node_modules/rxjs/operator/toPromise.js",
            "node_modules/rxjs/symbol/observable.js",
            "node_modules/rxjs/symbol/rxSubscriber.js",
            "node_modules/rxjs/util/ObjectUnsubscribedError.js",
            "node_modules/rxjs/util/UnsubscriptionError.js",
            "node_modules/rxjs/util/errorObject.js",
            "node_modules/rxjs/util/isArray.js",
            "node_modules/rxjs/util/isFunction.js",
            "node_modules/rxjs/util/isObject.js",
            "node_modules/rxjs/util/root.js",
            "node_modules/rxjs/util/throwError.js",
            "node_modules/rxjs/util/toSubscriber.js",
            "node_modules/rxjs/util/tryCatch.js",
            "node_modules/seedrandom/seedrandom.js"
        ]
    },
    "map": {
        "@angular": "node_modules/@angular",
        "angular2-in-memory-web-api": "node_modules/angular2-in-memory-web-api",
        "app": "build",
        "hammerjs": "node_modules/hammerjs",
        "rxjs": "node_modules/rxjs",
        "seedrandom": "node_modules/seedrandom"
    },
    "packages": {
        "@angular/common": {
            "defaultExtension": "js",
            "main": "common.umd.js"
        },
        "@angular/compiler": {
            "defaultExtension": "js",
            "main": "compiler.umd.js"
        },
        "@angular/core": {
            "defaultExtension": "js",
            "main": "core.umd.js"
        },
        "@angular/http": {
            "defaultExtension": "js",
            "main": "http.umd.js"
        },
        "@angular/platform-browser": {
            "defaultExtension": "js",
            "main": "platform-browser.umd.js"
        },
        "@angular/platform-browser-dynamic": {
            "defaultExtension": "js",
            "main": "platform-browser-dynamic.umd.js"
        },
        "@angular/router": {
            "defaultExtension": "js",
            "main": "router.umd.js"
        },
        "@angular/upgrade": {
            "defaultExtension": "js",
            "main": "upgrade.umd.js"
        },
        "angular2-in-memory-web-api": {
            "defaultExtension": "js",
            "main": "index.js"
        },
        "app": {
            "defaultExtension": "js",
            "main": "bundle.js"
        },
        "hammerjs": {
            "defaultExtension": "js",
            "main": "hammer.js"
        },
        "rxjs": {
            "defaultExtension": "js"
        },
        "seedrandom": {
            "defaultExtension": "js",
            "main": "seedrandom.js"
        }
    }
});