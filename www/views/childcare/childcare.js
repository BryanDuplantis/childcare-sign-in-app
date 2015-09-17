module.controller('ChildCareCtrl', function($scope, $filter) {
  $scope.schedule = { date: null,
                      time: null,
                    };

  $scope.schedule.date = $filter('date')(Date.now(), 'yyyy-MM-dd');
  $scope.schedule.time = $filter('date')(Date.now(), 'HH:mm');

  $scope.tagline = 'To the moon and back!';
});
