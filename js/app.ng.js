;(function () {
    angular.module('BlankApp', ['ngMaterial', 'angular.filter'])
        .constant('formats', [
            {id: 'card_a7_portrait', title: 'A7 Портрет'},
            {id: 'card_a7_landscape', title: 'A7 Ландшафт'},
            {id: 'card_a8_portrait', title: 'A8 Портрет'},
            {id: 'card_a8_landscape', title: 'A8 Ландшафт'},
            {id: 'card_a9_portrait', title: 'A9 Портрет'},
            {id: 'card_a9_landscape', title: 'A9 Ландшафт'},
            {id: 'card_a10_portrait', title: 'A10 Портрет'},
            {id: 'card_a10_landscape', title: 'A10 Ландшафт'}
        ])
        .config(function ($mdIconProvider) {
            $mdIconProvider
                .icon('orient:landscape', '/assets/svg/ic_stay_current_landscape_black_24px.svg', 24)
                .icon('orient:portrait', '/assets/svg/ic_stay_current_portrait_black_24px.svg', 24);
        })
        .controller('AppController', ['$scope', '$window', '$location', 'formats', 'cardIcons',
            function ($scope, $window, $location, formats, cardIcons) {
                $scope.formats = formats;
                $scope.cards = cardIcons;
                $scope.cardClass = '';
                $scope.pageClass = '';

                $scope.$watch('cardClass', function (className) {
                    // debugger
                    var reg = /^card_a(\d{1,2})_(landscape|portrait)/i;
                    var match = className.match(reg);
                    var formatIdx = Number.parseInt(match[1]);
                    setCardsPerPage(Math.pow(2, formatIdx-4));

                    $scope.pageClass = getPageClass(className);
                    $scope.cardPages = getCardPages(className);
                    $scope.cardFormat = 'A'+formatIdx;
                })

                $scope.isLandscape = function (cardClass) {
                    var res =  (/landscape/i).test(cardClass);
                    return res;
                };
                $scope.isPortrait = function (cardClass) {
                    var res =  (/portrait/i).test(cardClass);
                    return res;
                }

                $($window).bind('hashchange', function (ev) {

                    // debugger;
                    var className = location.hash.slice(2);
                    $scope.cardClass = className;

                });

                var className = location.hash.slice(2);
                if((/^card_a(\d{1,2})_(landscape|portrait)/i).test(className)){
                    $scope.cardClass = className
                }else{
                    location.hash = "#card_a9_portrait";
                    location.reload(false);
                }

                function setCardsPerPage(val){
                    $scope.cardsPerPage = val;
                    // console.log('set cardsperpage: '+val);

                    // debugger;
                }

                function getCardPages(cardsPerPage) {
                    var res = cardIcons
                        .reduce(function (prev, val, idx) {
                            // console.log(arguments);

                            var i = idx/cardsPerPage>>0;

                            if(prev[i] === undefined) {prev[i] = []};
                            prev[i].push(val);

                            return prev;
                        },[]);
                    // debugger;
                    return res;
                }

                function getPageClass(cardClass){
                    var reg = /^card_a(\d{1,2})_(landscape|portrait)/i;
                    var match = cardClass.match(reg);
                    var formatIdx = Number.parseInt(match[1]);
                    var cardOrient = match[2];
                    var pgOrient = "";
                    // debugger;
                    if (formatIdx%2 == 0){
                        pgOrient = cardOrient;
                    }else{
                        pgOrient = (/(landscape)/i).test(cardOrient) ? 'portrait' : 'landscape';

                    };

                    var pageClass = ['page','a4',pgOrient].join('_');
                    console.log('Page Class: '+pageClass);
                    return pageClass;
                }

            }])
}())
