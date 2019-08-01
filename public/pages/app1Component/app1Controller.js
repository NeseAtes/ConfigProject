app.controller('app1Controller', function($scope, $http,$routeParams,$window){
    $scope.tab = 1;

    $scope.setTab = function(newTab){
        $scope.tab= newTab;
    };

    $scope.isSet = function(tabNum){
        return $scope.tab == tabNum;
    };
    
    $scope.ipNo = $routeParams.ip_no;
    $scope.appname = $routeParams.appName;
    console.log("$routeParams.appname",$routeParams.appName);
    console.log("$routeParams.ip_no",$routeParams.ip_no);
    $http.post("http://localhost:3000/config/get?ipNo="+$scope.ipNo+"&appname="+$scope.appname).then(function(response){
        console.log("response1",response);
        $scope.configList=response.data;
    });

    $http.post("http://localhost:3000/log/get?ipNo="+$scope.ipNo+"&appname="+$scope.appname).then(function(response){
        console.log("response2",response);
        $scope.logList = response.data;
    })

    $http.post("http://localhost:3000/version?ipNo="+$scope.ipNo+"&appname="+$scope.appname).then(function(response){
        console.log("version",response)
        $scope.versionList = response.data;
    })

    $scope.postConfig = function(pconfig){
        $http.post("http://localhost:3000/config/post?ipNo="+$scope.ipNo+"&appname="+$scope.appname+"&form="+pconfig).then(function(response){
            console.log("respConfig",response);
            $scope.deneme =response.data.form

        })
    };

    $scope.postLog = function(plog){
        $http.post("http://localhost:3000/log/post?ipNo="+$scope.ipNo+"&appname="+$scope.appname+"&form="+plog).then(function(response){
            console.log("respLog",response);
        })
    };

    $scope.reloadData = function(){
        $http.post("http://localhost:3000/config/reload?ipNo="+$scope.ipNo+"&appname="+$scope.appname).then(function(response){
            console.log("respReload",response);
            $window.location.reload();
        })
    }

})