'use strict';
angular.module('ngDay2App')
	.factory('PostsSvc', function($resource) {
		return $resource('api/collections/demotiy',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('api/collections/demotiy/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	});
angular.module('ngDay2App')	
	.factory('StoresSvc', function($resource){
		return $resource('api/collections/shopcartng',
			{},
			{
				query:{ method: 'GET', isArray: true },
				create:{ method: 'POST'}
			});
	})
	.factory('StoreSvc', function($resource){
		return $resource('api/collections/shopcartng/:id', 
		{
			id: '@_id'
		},
		{
			show: { method: 'GET'},
			edit: { method: 'PUT'},
			delete: { method: 'DELETE'}
		}
		)
	});
angular.module('ngDay2App')	
	.factory('CartsSvc', function($resource){
		return $resource('api/collections/cart', 
			{},
			{
				query:{method:'GET', isArray: true },
				create:{ method: 'POST'}

			});
	})
	.factory('CartSvc', function($resource){
		return $resource('api/collections/cart/:id',
		{
			id:'@_id'
		},
		{
			show: {method:'GET'},
			edit: {method:'PUT'},
			delete: { method:'DELETE'}
		}
		)
	});