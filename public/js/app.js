'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .when('/store',{
        templateUrl: 'views/store-list.html',
        controller: 'StoresCtrl'
      })
      .when('/newitem', {
        templateUrl: 'views/toy-create.html',
        controller: 'StoresCtrl'

      })
      .when('/store/:id', {
        templateUrl: 'views/store-detail.html',
        controller:'StoreCtrl'
      })
      .when('/store/:id/edit', {
        templateUrl:'views/store-editDetail.html',
        controller:'StoreCtrl'
      })
      .when('/cart',{
        templateUrl:'views/cart-list.html',
        controller:'CartsCtrl'
      })
      .when('/cart/:id', {
        templateUrl:'views/cart-detail.html',
        controller:'CartCtrl'
      })
      .when('/cart/:id', {
        templateUrl:'views/cart-editDetail.html',
        controller:'CartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
