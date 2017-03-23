var app = angular.module('MyApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',
        {
            url: '/home',
            templateUrl:'pages/home.html'
        })
        .state('directives',
        {
            url: '/directives',
            templateUrl:'pages/directive.html'
        });
});
app.controller('searchCtrl', function($scope){
    $scope.users = [
        {"idus":1,"first_name":"Heather","last_name":"Bell","hobby":"Eating"},
        {"idus":2,"first_name":"Andrea","last_name":"Dean","hobby":"Gaming"},
        {"idus":3,"first_name":"Peter","last_name":"Barnes","hobby":"Reading Books"},
        {"idus":4,"first_name":"Harry","last_name":"Bell","hobby":"Youtubing"},
        {"idus":5,"first_name":"Deborah","last_name":"Burns","hobby":"Fishing"},
        {"idus":6,"first_name":"Larry","last_name":"Kim","hobby":"Skipping"},
        {"idus":7,"first_name":"Jason","last_name":"Wallace","hobby":"Football"},
        {"idus":8,"first_name":"Russell","last_name":"Patterson","hobby":"Singing"}
    ];

    $scope.searchName = function(finded){
        $scope.us = [];
        for(var i = 0; i<$scope.users.length; i++){
            if($scope.users[i].first_name == finded){
                $scope.us.push({idus:$scope.users[i].idus, first_name:finded, last_name:$scope.users[i].last_name, hobby:$scope.users[i].hobby});
                $scope.finded = "";
            }
        }

    };

    $scope.search = function(nom){
        for(var i = 0; i<$scope.users.length; i++){
            if($scope.users[i].first_name == nom){
                $scope.users =[{idus:$scope.users[i].idus, first_name:nom, last_name:$scope.users[i].last_name, hobby:$scope.users[i].hobby}];
                $scope.nom = "";
            }
        }

    };

    $scope.reset = function(){
        $scope.iduser = "";
        $scope.firstname = "";
        $scope.lastname = "";
        $scope.hobby = "";
    };

    $scope.modifUsers = function(){
        for(var i = 0; i < $scope.users.length; i++){
            if($scope.users[i].idus == $scope.iduser){
                $scope.users[i].first_name = $scope.firstname;
                $scope.users[i].last_name = $scope.lastname;
                $scope.users[i].hobby = $scope.hobby;
            }
        }
        $scope.reset();
    };
    $scope.addUsers = function(){
        $scope.users.push({idus:$scope.iduser, first_name:$scope.firstname, last_name:$scope.lastname, hobby:$scope.hobby});
        $scope.reset();
    };
    $scope.remove = function(index){
        $scope.users.splice(index, 1);
    };
    $scope.affich = function(elt){
        $scope.element = elt;
    };
    $scope.ClickedUsers = function(index){
        if($scope.users[index]!== null){
            $scope.iduser = $scope.users[index].idus;
            $scope.firstname = $scope.users[index].first_name;
            $scope.lastname = $scope.users[index].last_name;
            $scope.hobby = $scope.users[index].hobby;
        }
    }
});