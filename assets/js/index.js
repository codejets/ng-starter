/*global angular window*/
(function withAngular(angular) {

    'use strict';

    angular.module('website', [
            'ngRoute',
            'ngStarter.fx'
        ])
        .config(['$locationProvider', function($locationProvider) {

            $locationProvider.html5Mode({
                'enabled': true,
                'requireBase': false
            }).hashPrefix('#');
        }])
        .controller('Ctrl', ['$scope', '$location', '$window',
            function Ctrl($scope, $location, $window) {

                var hash;


                if ($location.$$hash) {

                    $scope.activeLink = $location.$$hash;
                } else {

                    $scope.activeLink = 'home';
                }

                $scope.setActiveLink = function setActiveLink(link) {
                    $scope.activeLink = link;
                };
                $scope.setAppsSliderType = function setAppsSliderType(type) {
                    $scope.appsSliderType = type;
                };
            }
        ])
        .controller('TodoListController', function() {
            var todoList = this;
            todoList.todos = [{
                text: 'learn angular',
                done: true
            }, {
                text: 'build an angular app',
                done: false
            }];

            todoList.addTodo = function() {
                todoList.todos.push({
                    text: todoList.todoText,
                    done: false
                });
                todoList.todoText = '';
            };

            todoList.remaining = function() {
                var count = 0;
                angular.forEach(todoList.todos, function(todo) {
                    count += todo.done ? 0 : 1;
                });
                return count;
            };

            todoList.archive = function() {
                var oldTodos = todoList.todos;
                todoList.todos = [];
                angular.forEach(oldTodos, function(todo) {
                    if (!todo.done) todoList.todos.push(todo);
                });
            };
        });

}(angular));
