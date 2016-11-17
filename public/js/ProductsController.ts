namespace App {

    export class ProductsController {
        //static $inject = ['$scope'];
        static $inject = [];

        public title;

        constructor (/*private $scope*/) {
            this.title = 'Products Page';
        }
    }

}
