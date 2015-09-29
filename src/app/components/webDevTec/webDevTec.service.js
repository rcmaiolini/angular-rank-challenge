(function() {
  'use strict';

  angular
      .module('angularRankChallenge')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'name': 'Adam Abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
      {
        'name': 'Adam Abrons',
        'user': 'abrons',
        'url': 'https://github.com/abrons',
        'local': 'Oakland, CA',
        'org': 'Square',
        'org_url': 'https://squareup.com',
        'pic': 'https://avatars1.githubusercontent.com/u/4529?v=3&s=400',
        'member': 'Joined on 3 Apr 2008',
        'followers': '45',
        'starred': '95',
        'following': '5'
      },
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();