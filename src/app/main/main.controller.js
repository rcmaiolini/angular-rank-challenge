(function() {
  'use strict';

  angular
    .module('angularRankChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, gitCrawler, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1443217588481;
    vm.showToastr = showToastr;

    activate();

    gitCrawler.getUsers();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();


/*
*  https://github.com/login/oauth/authorize?client_id=2ab2064750da77f6c849&redirect_uri=http://localhost:3000/
* */

e96e83cbac046db5bfed
