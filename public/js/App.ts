namespace App {
    // Setup the node app module.
    let app = angular.module ('App', ['ui.router']);

    app.config([
        '$stateProvider',
        ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider
                .state ('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'myController'
                })
                .state ('front-page', {
                    url: '/front-page',
                    templateUrl: 'templates/front-page.html',
                    controller: App.FrontPageController,
                    controllerAs: 'frontPageController'
                })
                .state ('product', {
                    url: '/products',
                    templateUrl: 'templates/products.html',
                    controller: App.ProductsController,
                    controllerAs: 'productsController'
                })

            }
    ]);
}
