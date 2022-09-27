var app = angular.module('myApp', []);

app.controller('HomeCtrl', function ($scope) {
    $scope.firstName;
    $scope.lastName;
    $scope.age;
    $scope.isEdit = false;
    $scope.groupArr = []
    $scope.insert = function (action,index) {
        switch (action) {
            case 'Add':
                console.log('Hey Vishal')
                if ($scope.firstName != undefined && $scope.lastName != undefined && $scope.age != undefined) {
                    $scope.groupArr.push({
                        firstName: $scope.firstName,
                        lastName: $scope.lastName,
                        age: $scope.age,
                        isEdit: false
                    })
                    $scope.firstName = null;
                    $scope.lastName = null;
                    $scope.age = null;
                    console.log($scope.groupArr)
                } else {
                    alert('Please Enter Details')
                }
                break;
            case 'Edit':
                $scope.groupArr[index].isEdit = true;
                $scope.firstName = $scope.groupArr[index].firstName;
                $scope.lastName = $scope.groupArr[index].lastName;
                $scope.age = $scope.groupArr[index].age;
                break;
            case 'EditSave':
                $scope.groupArr[index].firstName = $scope.firstName;
                $scope.groupArr[index].lastName = $scope.lastName ;
                $scope.groupArr[index].age = $scope.age ;    
            break;
            case 'Delete':
                $scope.groupArr.splice(index,1);
                break;
            case 'cancel':
                $scope.groupArr[index].isEdit = false;
                break;    
        }

    };
});