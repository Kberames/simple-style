namespace App {
    // Setup the node app module.
    let app = angular.module ('App', ['ui.router']);

    app.config([
        '$stateProvider',
        ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider
                .state ('home', {
                    url: '/',
                    //template: 'This is my home page. <p> title value: {{ title }} </p>',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'myController'
                })

            }
    ]);
}
