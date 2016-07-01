System.config({
    "bundles": {
        "build/bundle.js": [
            "build/app/app.component.js",
            "build/app/design/design.component.js",
            "build/app/dictionary/dictionary-screen.component.js",
            "build/app/dictionary/shared/dictionary.service.js",
            "build/app/home/home-screen.component.js",
            "build/app/lessons/lesson-screen.component.js",
            "build/app/lessons/lessons-screen.component.js",
            "build/app/lessons/repetition-screen.component.js",
            "build/app/lessons/shared/declension.pipe.js",
            "build/app/lessons/shared/lesson-card.component.js",
            "build/app/lessons/shared/lesson.data.js",
            "build/app/lessons/shared/lesson.service.js",
            "build/app/lessons/shared/memo-card.component.js",
            "build/app/lessons/shared/memos.js",
            "build/app/other/other.component.js",
            "build/app/shared/dropdown-button-new.component.js",
            "build/app/shared/dropdown-button.component.js",
            "build/app/shared/localStorage.service.js",
            "build/app/shared/navigation.component.js",
            "build/app/shared/navigationState.service.js",
            "build/app/shared/rxjs-operators.js",
            "build/main.js",
            "node_modules/@angular/common/bundles/common.umd.js",
            "node_modules/@angular/compiler/bundles/compiler.umd.js",
            "node_modules/@angular/core/bundles/core.umd.js",
            "node_modules/@angular/http/bundles/http.umd.js",
            "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
            "node_modules/@angular/router/bundles/router.umd.js",
            "node_modules/hammerjs/hammer.js",
            "node_modules/rxjs/InnerSubscriber.js",
            "node_modules/rxjs/Observable.js",
            "node_modules/rxjs/Observer.js",
            "node_modules/rxjs/OuterSubscriber.js",
            "node_modules/rxjs/Subject.js",
            "node_modules/rxjs/SubjectSubscription.js",
            "node_modules/rxjs/Subscriber.js",
            "node_modules/rxjs/Subscription.js",
            "node_modules/rxjs/add/observable/of.js",
            "node_modules/rxjs/add/operator/catch.js",
            "node_modules/rxjs/add/operator/filter.js",
            "node_modules/rxjs/add/operator/map.js",
            "node_modules/rxjs/add/operator/mergeMap.js",
            "node_modules/rxjs/add/operator/toArray.js",
            "node_modules/rxjs/observable/ArrayObservable.js",
            "node_modules/rxjs/observable/EmptyObservable.js",
            "node_modules/rxjs/observable/PromiseObservable.js",
            "node_modules/rxjs/observable/ScalarObservable.js",
            "node_modules/rxjs/observable/of.js",
            "node_modules/rxjs/operator/catch.js",
            "node_modules/rxjs/operator/filter.js",
            "node_modules/rxjs/operator/map.js",
            "node_modules/rxjs/operator/mergeMap.js",
            "node_modules/rxjs/operator/toArray.js",
            "node_modules/rxjs/operator/toPromise.js",
            "node_modules/rxjs/symbol/iterator.js",
            "node_modules/rxjs/symbol/observable.js",
            "node_modules/rxjs/symbol/rxSubscriber.js",
            "node_modules/rxjs/util/ObjectUnsubscribedError.js",
            "node_modules/rxjs/util/UnsubscriptionError.js",
            "node_modules/rxjs/util/errorObject.js",
            "node_modules/rxjs/util/isArray.js",
            "node_modules/rxjs/util/isFunction.js",
            "node_modules/rxjs/util/isObject.js",
            "node_modules/rxjs/util/isPromise.js",
            "node_modules/rxjs/util/isScheduler.js",
            "node_modules/rxjs/util/root.js",
            "node_modules/rxjs/util/subscribeToResult.js",
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
            "main": "bundles/common.umd.js"
        },
        "@angular/compiler": {
            "defaultExtension": "js",
            "main": "bundles/compiler.umd.js"
        },
        "@angular/core": {
            "defaultExtension": "js",
            "main": "bundles/core.umd.js"
        },
        "@angular/http": {
            "defaultExtension": "js",
            "main": "bundles/http.umd.js"
        },
        "@angular/platform-browser": {
            "defaultExtension": "js",
            "main": "bundles/platform-browser.umd.js"
        },
        "@angular/platform-browser-dynamic": {
            "defaultExtension": "js",
            "main": "bundles/platform-browser-dynamic.umd.js"
        },
        "@angular/router": {
            "defaultExtension": "js",
            "main": "bundles/router.umd.js"
        },
        "@angular/upgrade": {
            "defaultExtension": "js",
            "main": "bundles/upgrade.umd.js"
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