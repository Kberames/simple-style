namespace App {

    export class FrontPageController {
        //static $inject = ['$scope'];
        static $inject = [];

        public title;

        constructor (/*private $scope*/) {
            console.log ('inside FrontPageController');
            this.title = 'Front Page';
        }
    }

}
