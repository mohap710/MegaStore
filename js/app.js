var app=angular.module("myApp",["ui.router","ngAnimate",'ngMaterial'])
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider

        .state("main",{
            url:"/main",
            views:{
                main:{
                    templateUrl:"templates/main.html",


                }
            }

        })

        .state("main.phone",{
            url:"/main",
            views:{
                main:{
                    templateUrl:"templates/main.html",


                }
            }

        })

        .state("main.home",{
            url:"/home",
            views:{
                sub:{templateUrl:"templates/home.html",
                    controller:"storeCtrl"

                }
            }
        })
        .state("main.contact",{
            url:"/contact",
            views:{
                sub:{templateUrl:"templates/contact.html"}
            }
        })
        .state("main.store",{
            url:"/store",
            views:{
                sub:{
                    templateUrl:"templates/store.html",
                     controller:"storeCtrl"
                }
            }
        })


    $urlRouterProvider.otherwise("/main/home")
//


})
