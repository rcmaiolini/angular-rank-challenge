(function() {
  'use strict';
  angular
    .module('gitCrawler', [])
    /*  .controller('GitCrawlerController', ['gitCrawler', function (gitCrawler) {
     gitCrawler.getUsers();
     }])*/
    .factory('gitCrawler', ['$http', '$q', function ($http, $q) {

      return {
        getUsers: getUsers
      };

      function getUsers() {
        var deferer = $q.defer();

        $http
          .get('https://api.github.com/orgs/angular')
          .then(httpSuccess, httpError);

        function httpSuccess(resp) {
          crawlRepos(resp.data.repos_url);
        }

        function httpError(resp) {

        }

        return deferer.promise;
      }

      function getUserInfo(userUrl) {
        var deferer = $q.defer();

        $http
          .get(userUrl)
          .then(httpSuccess, httpError);

        function httpSuccess(resp) {

        }

        function httpError(resp) {

        }

        return deferer.promise;
      }

      function crawlUsers(repoData, usersData) {
        var deferer = $q.defer();

        $http
          .get(repoData.contributors_url)
          .then(httpSuccess, httpError);

        return deferer.promise;

        function httpSuccess(resp) {
          var contributorsNum = resp.data.length;
          angular.forEach(resp.data, function (contributorData) {
            if (angular.isUndefined(usersData[contributorData.login])) {
              usersData[contributorData.login] = {repoContributions: {}};
              /*
               getUserInfo(contributorData.contributors_url, usersData)
               .then(function(userData){
               angular.extends(usersData[contributorData.login], userData);
               });
               */
            }

            usersData[contributorData.login]['repoContributions'][repoData.name] = contributorData.contributions;
            contributorsNum--;


            if (contributorsNum <= 0)
              deferer.resolve();
          })
        }

        function httpError(resp) {
          deferer.resolve();
        }
      }

      function crawlRepos(reposUrl) {
        var deferer = $q.defer();
        var usersData = {};

        $http
          .get(reposUrl)
          .then(httpSuccess, httpError);

        return deferer.promise;

        function httpSuccess(resp) {
          var reposNum = resp.data.length;
          angular.forEach(resp.data, function (repoData) {
            crawlUsers(repoData, usersData)
              .then(function () {
                reposNum--;
                if (reposNum <= 0)
                  console.log(usersData);
                deferer.resolve(usersData);
              });
          })
        }

        function httpError(resp) {

        }
      }
    }]);
})();
