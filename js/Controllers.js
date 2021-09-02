app.controller("appCtrl",function ($rootScope,$scope,$timeout,$interval) {
    $rootScope.CartProduct=[]
    $rootScope.total=0
    $rootScope.top=[
        {name:"J7 Pro" ,img:'img/phones/j7 pro.jpg',price:900,company:"Samsung"},
        {name:"Nova 3i",img:'img/phones/huawei6.jpg',price:615,company:"Huawei"},
        {name:"HP 6",img:'img/laptops/hp6.jpg',price:995,company:"HP"},
        {name:"Acer 5",img:'img/laptops/ace5.jpg',price:430,company:"Acer"},
        {name:"Sony 5",img:'img/screens/sony 42.jpg',price:750,company:"Sony"},
        {name:"LG 4",img:'img/screens/LG 34 Ultra.jpg',price:280,company:"LG"},

    ]
    $(document).ready(function(){
        var deg=0;
        calcRotation(deg)
        $scope.prev=function(){
            deg=deg-90;
            calcRotation(deg)
        }
        $scope.next=function(){
            deg=deg+90;
            calcRotation(deg)
        }
// $interval(function () { calcRotation(deg)
// deg=deg+90
// },2500)

    // $timeout(function(){
    //     calcRotation(0);
    // },1000);
    //
    // $timeout(function(){
    //     calcRotation(90);
    // },2000);
    //
    // $timeout(function(){
    //     calcRotation(180);
    // },3000);
    // $timeout(function(){
    //     calcRotation(270);
    // },4000);
    // $timeout(function(){
    //     calcRotation(360);
    // },5000);





        function calcRotation(rot){
            $("#cube").css("transform", "rotateY(-" + rot + "deg)");
        }
        function Rotation(rot){
            $("#cube").css("transform", "rotateX(-" + rot + "deg)");
        }
    });
})
app.controller("storeCtrl",function ($rootScope,$scope,$mdDialog,$mdToast,$timeout) {
    $rootScope.phones=[

        {name:"Iphone 4s",img:'img/phones/ip3.jpg',price:250,company:"Iphone"},
        {name:"Galaxy A30" ,img:'img/phones/sm2.jpg',price:450,company:"Samsung"},
        {name:"Galaxy ZFold",img:'img/phones/sm3.jpg',price:900,company:"Samsung"},
        {name:"Nova Tab",img:'img/phones/huawei1.jpg',price:410,company:"Huawei"},
        {name:"J7 Pro" ,img:'img/phones/j7 pro.jpg',price:900,company:"Samsung"},
        {name:"P40",img:'img/phones/huawei2.jpg',price:325,company:"Huawei"},
        {name:"P40",img:'img/phones/huwaei3.jpg',price:327,company:"Huawei"},
        {name:"Galaxy A51",img:'img/phones/sm6.jpg',price:995,company:"Samsung"},
        {name:"Nova 3e",img:'img/phones/huawei4.jpg',price:520,company:"Huawei"},
        {name:"Galaxy S10",img:'img/phones/s10.jpg',price:750,company:"Samsung"},
        {name:"Galaxy S9",img:'img/phones/s9.jpg',price:995,company:"Samsung"},
        {name:"Galaxy A51s",img:'img/phones/smav1.jpg',price:1899,company:"Samsung"},
        {name:"Iphone 11",img:'img/phones/ip11.jpg',price:750,company:"Iphone"},
        {name:"Iphone 11 Pro",img:'img/phones/ip11 pro.jpg',price:980,company:"Iphone"},
        {name:"Iphone X",img:'img/phones/ipx.webp',price:600,company:"Iphone"},
        {name:"Iphone XR",img:'img/phones/ipxr.webp',price:550,company:"Iphone"},
        {name:"11 Pro Max",img:'img/phones/iopromax.jpg',price:600,company:"Iphone"},
        {name:"Iphone SE",img:'img/phones/ipse.jpg',price:450,company:"Iphone"},
        {name:"Iphone 5",img:'img/phones/ip5s.png',price:600,company:"Iphone"},
        {name:"Galaxy A80",img:'img/phones/sm1.jpg',price:850,company:"Samsung"},
        {name:"Nova 3i",img:'img/phones/huawei6.jpg',price:615,company:"Huawei"},
        {name:"P30 lite",img:'img/phones/huwaei3.jpg',price:370,company:"Huawei"},
        {name:"Honor 8x",img:'img/phones/huawei5.jpg',price:700,company:"Huawei"},
        {name:"P30",img:'img/phones/huawei7.jpg',price:450,company:"Huawei"},
        {name:"Y6s",img:'img/phones/sm9.jpg',price:280,company:"Huawei"},

    ]
    $rootScope.laptops=[
        {name:"HP 1",img:"img/laptops/hp1.jpg",price:850,company:"HP"},
        {name:"HP 2",img:'img/laptops/hp2.jpg',price:450,company:"HP"},
        {name:"Toshiba 3",img:'img/laptops/toshipa3.jpg',price:840,company:"Toshiba"},

        {name:"HP 3",img:'img/laptops/hp3.jpg',price:900,company:"HP"},
        {name:"Acer 3",img:'img/laptops/ace3.jpg',price:520,company:"Acer"},

        {name:"HP 7",img:'img/laptops/hp7.jpg',price:995,company:"HP"},
        {name:"HP 8",img:'img/laptops/hp8.jpg',price:189,company:"HP"},
        {name:"Toshiba 1",img:'img/laptops/toshipa1.jpg',price:275,company:"Toshiba"},
        {name:"HP 4",img:'img/laptops/hp4.jpg',price:900,company:"HP"},
        {name:"Toshiba 2",img:'img/laptops/toshipa2.jpg',price:440,company:"Toshiba"},
        {name:"Toshiba 4",img:'img/laptops/toshipa4.jpg',price:320,company:"Toshiba"},
        {name:"HP 6",img:'img/laptops/hp6.jpg',price:995,company:"HP"},

        {name:"Toshiba 5",img:'img/laptops/toshipa5.jpg',price:500,company:"Toshiba"},
        {name:"Toshiba 6",img:'img/laptops/toshipa6.jpg',price:700,company:"Toshiba"},
        {name:"Toshiba 7",img:'img/laptops/toshipa7.jpg',price:540,company:"Toshiba"},

        {name:"Toshiba 8",img:'img/laptops/toshipa8.jpg',price:490,company:"Toshiba"},
        {name:"Acer 1",img:'img/laptops/ace1.jpg',price:490,company:"Acer"},
        {name:"Acer 2",img:'img/laptops/ace2.jpg',price:700,company:"Acer"},
        {name:"Acer 4",img:'img/laptops/ace4.jpg',price:900,company:"Acer"},
        {name:"Acer 5",img:'img/laptops/ace5.jpg',price:430,company:"Acer"},
        {name:"HP 5",img:'img/laptops/hp5.jpg',price:750,company:"HP",dis:525},

        {name:"Acer 7",img:'img/laptops/ace7.jpg',price:325,company:"Acer"},
        {name:"Acer 8",img:'img/laptops/ace8.jpg',price:790,company:"Acer"},
    ]
    $rootScope.screens=[
        {name:"Sony 1",img:"img/screens/SONY-KDL-46HX850.jpg",price:850,company:"Sony"},
        {name:"Sony 3",img:'img/screens/50-inch-sony-led-tv.png',price:900,company:"Sony"},
        {name:"Danasat 2",img:'img/screens/danasat 39.jpg',price:190,company:"Danasat"},

        {name:"Sony 4",img:'img/screens/sony 55.jpeg',price:900,company:"Sony"},
        {name:"Danasat 4",img:'img/screens/danasat 65.jpg',price:770,company:"Danasat"},

        {name:"Sony 5",img:'img/screens/sony 42.jpg',price:750,company:"Sony"},
        {name:"LG 1",img:'img/screens/LG Oled.jpg',price:995,company:"LG"},
        {name:"LG 2",img:'img/screens/LG 24 led.jpg',price:189,company:"LG"},
        {name:"Danasat 3",img:'img/screens/danasat 40.jpg',price:450,company:"Danasat"},

        {name:"LG 3",img:'img/screens/LG 32.jpg',price:129.5,company:"LG",dis:180},
        {name:"Sony 6",img:'img/screens/sony oled.webp',price:995,company:"Sony"},

        {name:"LG 4",img:'img/screens/LG 34 Ultra.jpg',price:280,company:"LG"},
        {name:"LG 5",img:'img/screens/LG 43.jpg',price:360,company:"LG"},
        {name:"LG 6",img:'img/screens/LG 48 led.jpg',price:800,company:"LG"},
        {name:"Danasat 1",img:'img/screens/danasat 32.jpg',price:890,company:"Danasat"},
        {name:"Danasat 5",img:'img/screens/danasat 75.jpg',price:680,company:"Danasat"},
        {name:"Sony 2",img:'img/screens/sony-w67f-led-tv.png',price:450,company:"Sony"},

        {name:"Danasat 6",img:'img/screens/danasat 87.jpg',price:320,company:"Danasat"},



    ]


    var i=0



$scope.qty=function(product){
        if(product.qty>=2)
        {
        product.qty-=1;
        }
        else {
            product.qty=1;
        }
}

    //cart
    $scope.cartshow=false
$scope.found=false;
    $scope.addToCart = function (product) {
        $rootScope.cart=$rootScope.CartProduct
         $rootScope.cart.forEach(cartProduct=> {
             if (product.name === cartProduct.name) {
                 $scope.found = true
                 $rootScope.ind = $rootScope.cart.indexOf(cartProduct)
             }
         })
         if ($scope.found)
         {
             $rootScope.cart[$rootScope.ind].qty= parseInt($rootScope.cart[$rootScope.ind].qty) + parseInt(product.qty)
             $scope.found=false;
         }

         else {
         $rootScope.CartProduct.push(product)
console.log($rootScope.ind)
         }
        i++
         }

    $scope.openCart=function(ev,cartProduct){

        $mdDialog.show({
            scope: $scope,
            templateUrl: 'templates/cart.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            preserveScope:true,


        })

    }
    $scope.removeItem = function(product) {
        var index = $scope.cart.indexOf(product);
        $scope.cart.splice(index, 1);
    };
    //End

$scope.show=false
    $scope.open = function(product,ev) {

        $scope.product=product
        $mdDialog.show({
            scope: $scope,
            templateUrl: 'templates/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            preserveScope:true,
            closeTo:(angular.element(document.querySelector('#cart'))),

        })
    }
    $scope.cancel = function(addr,qty) {
        $mdDialog.cancel();

    };
    $scope.thanks = function(product,ev) {



            $mdDialog.show({
                scope: $scope,
                templateUrl: 'templates/thanks.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                preserveScope:true

            })
        $timeout(function () {
                $scope.cancel()
            },1500)





    }

    $scope.buy=function (product) {
        if (product.qty==null||product.qty<1)
        {
            $scope.alert=true
            $timeout(function () {
                $scope.alert=false
            },1000)

        }
        else {
            $timeout(function () {
                $scope.show=true
            })
            $timeout(function () {
                $scope.thanks()
                $scope.addToCart(product)
                $scope.show=false
            },2000)
        }




}


})
.filter("totFilter",function ($rootScope) {
return function (input) {
    if(!input){
        return input
        var tot=0
        input.forEach(function (item) {
tot+=item.price*item.qty

        })
        $rootScope.tot=tot
        return input
    }

}
})
    .filter('sumOfValue', function() {
        return function(data, key) {
            debugger;
            if (angular.isUndefined(data) || angular.isUndefined(key))
                return 0;
            var sum = 0;

            angular.forEach(data, function(v, k) {
                sum = sum + parseInt(v[key]);
            });
            return sum;
        }
    })
    .filter('totalSumPriceQty', function() {
        return function (data, key1, key2) {
            if (angular.isUndefined(data) || angular.isUndefined(key1) || angular.isUndefined(key2))
                return 0;

            var sum = 0;
            angular.forEach(data, function (v, k) {
                sum = sum + (parseInt(v[key1]) * parseInt(v[key2]));
            });
            return sum;
        }
    })
// app.directive('setClassWhenAtTop', function ($window) {
//     var $win = angular.element($window); // wrap window object as jQuery object
//
//     return {
//         restrict: 'A',
//         link: function (scope, element, attrs) {
//             var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
//                 offsetTop = element.offset().top; // get element's offset top relative to document
//
//             $win.on('scroll', function (e) {
//                 if ($win.scrollTop() >= offsetTop) {
//                     ("#nav").addClass(topClass);
//                 } else {
//                     ("#nav").removeClass(topClass);
//                 }
//             });
//         }
//     };
// });