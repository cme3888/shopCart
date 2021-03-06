'use strict';

angular.module('ngDay2App')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {

    $scope.createPost = function() {
    	$location.path('/new');
    };
    $scope.newPost = function(post) {
    	PostsSvc.create(post)
    	$location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {

  	$scope.post = PostSvc.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/blog');
  	};

  });
angular.module('ngDay2App')
  .controller('StoresCtrl', function ($scope, $location, StoresSvc){

    $scope.createItem = function() {
      $location.path('/newitem');
    };
    $scope.newItem = function(item) {
      StoresSvc.create(item)
      $location.path('/store');
    };
    $scope.products = StoresSvc.query();
  })
  .controller('StoreCtrl', function($scope, $location, $routeParams, StoreSvc) {
    $scope.item = StoreSvc.show({ id: $routeParams.id});
    $scope.delete = function() {
      StoreSvc.delete({ id: $routeParams.id });
      $location.path('/store');
    };
  });
  angular.module('ngDay2App')
  .controller('CartCtrl', function ($scope, $location, CartSvc){
    
    $scope.cartitem = CartSvc.show({ id: $routeParams.id});
    $scope.deleteItem = function() {
      CartSvc.delete({ id: $routeParams.id});
      $location.path('/cart');
    };
   $scope.editItem = function() {
      CartSvc.edit($cartitem);
      $location.path('/cart');
    };
    }




  });
