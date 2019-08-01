var app = angular.module('myApp', ['ngRoute', 'ngStorage','xeditable']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/:ip_no/:appName', {
        templateUrl: './pages/app1Component/app1.html',
        controller: 'app1Controller'
    });
});

app.controller("appController",function($scope, $http, $routeParams){
    $scope.list= [];
    
    $http.get("http://localhost:3000/app/list").then(function(response){
        //console.log("response",response.data);
        //$scope.list.push(response);
        for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];   
            console.log("element",element.ip_no);   
            $scope.list.push(element);    
        }
    })
})