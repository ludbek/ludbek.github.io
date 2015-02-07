angular.module("ludbek", ["ngAnimate"]).
    controller("MainController", ["$scope", function ($scope) {
        $scope.nav_visisble = false;
        // update window height every time window resizes
        height = $(window).height();
        $(window).resize(function () {
            height = $(window).height();
        });
        TweenLite.to('.remove-cover', 0, {scale: 0});
        TweenLite.to('.remove-cover', 0, {scale: 0});
        $('.slide-down').css('top', -height);
    }]).
    animation('.zoom', function () {
        return {
           addClass : function (el, className, done) {
               if (className === 'ng-hide') {
                   TweenLite.to(el, 0.5, {scale: 0, ease: Sine.easeOut});
               }
           },
           removeClass : function (el, className, done) {
               if (className === 'ng-hide') {
                   TweenLite.to(el, 0.5, {scale: 1, ease: Sine.easeOut});
               }
           }
        };
    }).
    animation('.slide-down', function () {
        return {
           addClass : function (el, className, done) {
               if (className === 'ng-hide') {
                   TweenLite.to(el, 0.5, {top: -height, ease: Sine.easeOut});
               }
           },
           removeClass : function (el, className, done) {
               if (className === 'ng-hide') {
                   TweenLite.to(el, 0.5, {top: 0, ease: Sine.easeOut});
               }
           }
        };
    });
