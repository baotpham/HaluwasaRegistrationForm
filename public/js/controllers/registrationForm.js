/**
 * Created by baothienpham on 3/27/17.
 */

angular.module('app.controllers', [])


    .controller('registrationPageCtrl', ['$scope', 'RegistersData', '$window',

        function ($scope, $window, RegistersData) {

            var CLIENT_ID = '679590288663-6mae7gt4cgtnoqedcnhbmueeukit7b7u.apps.googleusercontent.com';

            //errors handling
            $scope.errorpopup = "";
            $scope.thankyou = false;

            $scope.totalFee = 0;

            //list of other members to add
            $scope.registerMembersToAdd = [];

            //list of other members
            $scope.registerMembers = [];

            //main member information
            $scope.mainMember = {
                firstName: "",
                lastName: "",
                shirtSize: "",
                dob: "",
                gender: "",
                age: "",
                relationship: "",
                address : "",
                address2: "",
                city: "",
                state: "",
                zip: "",
                phone: "",
                email: "",
                homeChurch: "",
                churchPhone: "",
                medical: "no",
                medicalDesc: "",
                emergencyFirstName: "",
                emergencyLastName: "",
                emergencyPhone: "",
                emergencyRelationship: "",
                methodOfPayment: ""
            };

            $scope.addAnotherMember = function(){

                if(isReadyToAddAnotherMember()){
                    $scope.errorpopup = "";

                    $scope.registerMembersToAdd.push({
                        firstName: "",
                        lastName: "",
                        shirtSize: "",
                        dob: "",
                        gender: "",
                        age: "",
                        relationship: ""
                    });
                    $scope.totalFee += 120;
                    console.log("registrationFormCtrl: added a member");
                }
            };

            //check for empty fields
            function isReadyToAddAnotherMember(){
                if($scope.mainMember.firstName === "" || $scope.mainMember.lastName === " "){
                    $scope.errorpopup = "First Name is empty";
                    return false;
                }else if($scope.mainMember.lastName === "" || $scope.mainMember.lastName === " "){
                    $scope.errorpopup = "Last Name is empty";
                    return false;
                }else if($scope.mainMember.shirtSize === "" || $scope.mainMember.shirtSize === " "){
                    $scope.errorpopup = "Shirt Size is empty";
                    return false;
                }else if($scope.mainMember.dob === "" || $scope.mainMember.dob === " "){
                    $scope.errorpopup = "DOB is empty";
                    return false;
                }else if($scope.mainMember.gender === "" || $scope.mainMember.gender === " "){
                    $scope.errorpopup = "Gender is empty";
                    return false;
                }else if ($scope.mainMember.age === "" || $scope.mainMember.age === " "){
                    $scope.errorpopup = "Age is empty";
                    return false;
                }else if($scope.mainMember.relationship === "" || $scope.mainMember.relationship === " "){
                    $scope.errorpopup = "Relationship is empty";
                    return false;
                }else{
                    return true;
                }
            }

            //update age
            $scope.updateTotalFee = function(age){
                if(age <= 5){
                    $scope.errorpopup = "";
                    $scope.totalFee = 0;
                }else if(age >= 6 && age < 11){
                    $scope.errorpopup = "";
                    $scope.totalFee = 60;
                }else if(age >= 12 && age <= 19){
                    $scope.errorpopup = "";
                    $scope.totalFee = 100;
                }else if(age >= 20){
                    $scope.errorpopup = "";
                    $scope.totalFee = 120;
                }else{
                    $scope.errorpopup = "Age is empty";
                }
            }

            $scope.deleteMember = function(registerMemberToAdd){
                var answer = confirm("Are you sure you want to delete this member?");

                if(answer){
                    var index = $scope.registerMembersToAdd.indexOf(registerMemberToAdd);
                    $scope.registerMembersToAdd.splice(index, 1);
                    $scope.totalFee -= 120;
                    console.log("registrationFormCtrl: deleted a member");
                }
            };

        }]);