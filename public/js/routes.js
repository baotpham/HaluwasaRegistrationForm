/**
 * Created by baothienpham on 3/27/17.
 */

angular.module('app.routes', ['ui.router'])



    .config(function($stateProvider,$urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('registration',{
                name: 'Registration',
                url: '/registration',
                templateUrl: 'templates/registrationPage.html',
                controller: 'registrationPageCtrl'
            })

            .state('aboutUs',{
                name: 'About Us',
                url: '/aboutUs',
                templateUrl: 'templates/aboutUs.html',
                controller: 'aboutUsCtrl'
            })

            .state('contactUs',{
                name: 'Contact Us',
                url: '/contactUs',
                templateUrl: 'templates/contactUs.html',
                controller: 'contactUsCtrl'
            })

            .state('homePage',{
                name: 'Home Page',
                url: '/',
                templateUrl: 'templates/homePage.html',
                controller: 'homePageCtrl'
            })

            .state('thankyouPage',{
                name: 'Thank You',
                url: '/thankyou',
                templateUrl: 'templates/thankYou.html',
                controller: 'thankYouCtrl'
            })


        $urlRouterProvider.otherwise('/')
    });
