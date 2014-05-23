var shopCartApp = angular.module('shopCartApp');

 shopCartApp.controller('MainCtrl', ['$scope', function MainCtrl($scope) {

    $scope.awesomeThings = [
 {
 	name:"Rubix Cube",
 	price: 12.95,
 	description:"A puzzle cube of six sides each containing nine cubes of the same color that you must match to complete the puzzle.",
 	canPurchase: false,
 	soldOut:true,
 	images:[{full:"http://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Rubik's_cube.svg/480px-Rubik's_cube.svg.png"}]
 },
 {
 	name:"Koosh Ball",
 	price:13.24,
 	description:"You can almost still smell the rubbery goodness. Also, if you touch your index finger and your thumb, you can almost feel that you're dangling a Koosh ball by a single rubber strand again",
 	canPurchase: true,
 	soldOut: false,
 	images:[{full:"https://i.chzbgr.com/maxW500/7964083712/hAEA7910C/"}]
 },
 {
 	name:"Gak",
 	price:7.59,
 	description:"Every neatfreak parent's worst nightmare. With enough determination, you could get it stuck in the carpet!",
 	canPurchase: true,
 	soldOut: false,
 	images:[{ full: "https://i.chzbgr.com/maxW500/7964124160/h9033F04E/"}]

 },
 {
 	name:"Super-Soaker",
 	price: 19.99,
 	description:"The only drawback of getting a Super Soaker as a Christmas present was that you had to wait until summer to use it.",
 	canPurchase: true,
 	soldOut: false,
 	images:[{full:"https://i.chzbgr.com/maxW500/7964130816/hC6AFD666/"}]
 },
 {
 	name:"Micro-Machines",
 	price:13.25,
 	description:"Legos get the bad rap for Most Painful Toy to Step On, but Micro Machines were a close second.",
 	canPurchase:true,
 	soldOut:false,
 	images:[{full:"https://i.chzbgr.com/maxW500/7964134912/hADB595B2/"}]

 },
 {
 	name:"Troll Dolls",
 	price: 2.99,
 	description:"What were you actually supposed to do with them? Who cares! Colorful hair!",
 	canPurchase:true,
 	soldOut:false,
 	images:[{full:"https://i.chzbgr.com/maxW500/7964151296/hD7F3C4ED/"}]
 }

 

 ];



}]);

      
   
