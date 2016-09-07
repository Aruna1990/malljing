angular
  .module('app')
  .component('mjSettings', {
    templateUrl: 'app/personal/settings.html',
    controller: settingsCtrl
  });

/** @ngInject */
function settingsCtrl($rootScope, $state, todoService, $scope, fileReader) {
  console.log('settingsCtrl');
  this.name = userInfo.name;
  this.password = '1';
  this.code = '';

  this.onSubmit = function(){
    console.log('[settingsCtrl] onSubmit');
    $rootScope.currentUser = userInfo;
    $state.go('app');
  }

  $scope.getFile = function () {
    fileReader.readAsDataUrl($scope.file, $scope).then(function(result) {
      $scope.imageSrc = result;
    });
  };
}

angular
  .module('app')
  .directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, ngModel) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;
        element.bind('change', function(event){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
          });
          scope.file = (event.srcElement || event.target).files[0];
          scope.getFile();
        });
      }
    };
  }]);

angular
  .module('app')
  .factory('fileReader', ["$q", "$log", function($q, $log){
    var onLoad = function(reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };
    var onError = function (reader, deferred, scope) {
      return function () {
        scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };
    var getReader = function(deferred, scope) {
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, scope);
      reader.onerror = onError(reader, deferred, scope);
      return reader;
    };
    var readAsDataURL = function (file, scope) {
      var deferred = $q.defer();
      var reader = getReader(deferred, scope);     
      reader.readAsDataURL(file);
      return deferred.promise;
    };
    return {
      readAsDataUrl: readAsDataURL  
    };
  }]);
