angular.module('lectorqr.controllers', ['ionic','ngCordova'])

.controller('LectorCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPopup) {
	console.log("Aqui voy");
	$scope.Leer = function () {
		console.log("Ahora Aqui");
		$cordovaBarcodeScanner.scan().then(function (CodigoQR) {
		var alerta = $ionicPopup.alert({
			title: "Escaneo",
			template: CodigoQR.text 
		});
      }, function (error) {
      	var alerta = $ionicPopup.alert({
			title: "Error",
			template: "Ocurrio un error con el escaneo"
		});
        console.log("Ocurrio un error con el escaneo");
    });
	}
})