/**
 * Created by baothienpham on 3/27/17.
 */

var controllers = angular.module('app.controllers', [])


    .controller('registrationPageCtrl', ['$scope', '$window',

        function ($scope, $window) {

            //errors handling
            $scope.errorpopup = "";
            $scope.thankyou = false;

            //total fees
            $scope.allFees = [];
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
                gender: "",
                age: "",
                relationship: "Does not apply!",
                address : "",
                address2: "",
                city: "",
                state: "",
                zip: "",
                phone: "",
                email: "",
                homeChurch: "",
                churchPhone: "",
                medical: "",
                medicalDesc: "",
                emergencyFirstName: "",
                emergencyLastName: "",
                emergencyPhone: "",
                emergencyRelationship: "",
                methodOfPayment: "",
                fee: 0
            };

            $scope.updateRegisterMember = function (registerMemberToAdd){
                console.log("update register Member fee: " + registerMemberToAdd.fee);
                if($scope.registerMembers.length === 0){
                    $scope.registerMembers.push(registerMemberToAdd);
                }else if($scope.registerMembers.length >= registerMemberToAdd.index) {
                    $scope.registerMembers[registerMemberToAdd.index] = registerMemberToAdd;
                }else{
                    $scope.registerMembers.push(registerMemberToAdd);
                }
            };

            var registerMemberIndex = 0;

            $scope.addAnotherMember = function(){
                // if(isReadyToAddAnotherMember()){
                    $scope.errorpopup = "";

                    $scope.registerMembersToAdd.push({
                        firstName: "",
                        lastName: "",
                        shirtSize: "",
                        gender: "",
                        age: "",
                        relationship: "",
                        index: registerMemberIndex,
                        fee: 0
                    });

                    registerMemberIndex++;
                    console.log("registrationFormCtrl: added a member");
                // }else{
                //     //scroll up to the top of the page
                //     $window.scrollTo(0, 0);
                // }
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
                    $scope.errorpopup = "T-Shirt Shirt Size is empty";
                    return false;
                }else if($scope.mainMember.gender === "" || $scope.mainMember.gender === " "){
                    $scope.errorpopup = "Gender is empty";
                    return false;
                }else if ($scope.mainMember.age === "" || $scope.mainMember.age === " "){
                    $scope.errorpopup = "Age is empty";
                    return false;
                }else{
                    return true;
                }
            }

            //update main member fee
            $scope.setMainMemberFee = function(age){
                if(age <= 5){
                    $scope.errorpopup = "";
                    $scope.mainMember.fee = 0
                }else if(age >= 6 && age <= 11){
                    $scope.errorpopup = "";
                    $scope.mainMember.fee = 60;
                }else if(age >= 12 && age <= 19){
                    $scope.errorpopup = "";
                    $scope.mainMember.fee = 100;
                }else if(age >= 20){
                    $scope.errorpopup = "";
                    $scope.mainMember.fee = 120;
                }else{
                    $window.scrollTo(0, 0);
                    $scope.errorpopup = "Age is empty";
                }
            };

            //update fee
            $scope.setRegisterMembersToAddFee = function(registerMemberToAdd){
                if(registerMemberToAdd.age <= 5){
                    $scope.errorpopup = "";
                    registerMemberToAdd.fee = 0; //update fee
                    $scope.updateRegisterMember(registerMemberToAdd); //update the registerMember[]
                }else if(registerMemberToAdd.age >= 6 && registerMemberToAdd.age <= 11){
                    $scope.errorpopup = "";
                    registerMemberToAdd.fee = 60;
                    $scope.updateRegisterMember(registerMemberToAdd);
                }else if(registerMemberToAdd.age >= 12 && registerMemberToAdd.age <= 19){
                    $scope.errorpopup = "";
                    registerMemberToAdd.fee = 100;
                    $scope.updateRegisterMember(registerMemberToAdd);
                }else if(registerMemberToAdd.age >= 20){
                    $scope.errorpopup = "";
                    registerMemberToAdd.fee = 120;
                    $scope.updateRegisterMember(registerMemberToAdd);
                }else{
                    $window.scrollTo(0, 0);
                    $scope.errorpopup = "Age is empty";
                }
            };

            //update the fee whenever Age gets modified
            $scope.updateTotalFee = function(){

                //reset allFees because Angular re-render the div
                $scope.allFees = [];

                //add all fee into all Fees
                $scope.registerMembers.forEach(function (registerMember) {
                   $scope.allFees.push(registerMember.fee);
                });

                //calculate the new fee
                if($scope.allFees.length > 0) {
                    var sum = 0;
                    $scope.allFees.forEach(function (fee) {
                        sum += fee;
                    });
                    $scope.totalFee = sum + $scope.mainMember.fee;
                }else{
                    $scope.totalFee = $scope.mainMember.fee;
                }

            };

            //subtract from total fee when delete a member
            function subtractFromTotalFee(age){
                if(age <= 5){
                    $scope.errorpopup = "";
                    $scope.allFees.splice($scope.allFees.indexOf(0), 1); //remove fee from allFees
                    $scope.totalFee -= 0;
                }else if(age >= 6 && age <= 11){
                    $scope.errorpopup = "";
                    $scope.allFees.splice($scope.allFees.indexOf(60), 1);
                    $scope.totalFee -= 60;
                }else if(age >= 12 && age <= 19){
                    $scope.errorpopup = "";
                    $scope.allFees.splice($scope.allFees.indexOf(100), 1);
                    $scope.totalFee -= 100;
                }else if(age >= 20){
                    $scope.errorpopup = "";
                    $scope.allFees.splice($scope.allFees.indexOf(120), 1);
                    $scope.totalFee -= 120;
                }else{
                    $window.scrollTo(0, 0);
                    $scope.errorpopup = "Age is empty";
                }
            }

            $scope.deleteMember = function(registerMemberToAdd){
                var answer = confirm("Are you sure you want to delete this member?");

                if(answer){
                    var index = $scope.registerMembersToAdd.indexOf(registerMemberToAdd);
                    $scope.registerMembersToAdd.splice(index, 1); //remove
                    subtractFromTotalFee(registerMemberToAdd.age); //update total fee
                    registerMemberIndex--; //update index

                    console.log("registrationFormCtrl: deleted a member");
                }
            };

            function isReadyToSubmit(){
                if(isReadyToAddAnotherMember()) {
                    if ($scope.mainMember.address === "" || $scope.mainMember.address === " ") {
                        $scope.errorpopup = "Address is empty";
                        return false;
                    } else if ($scope.mainMember.city === "" || $scope.mainMember.city === " ") {
                        $scope.errorpopup = "City is empty";
                        return false;
                    } else if ($scope.mainMember.state === "" || $scope.mainMember.state === " ") {
                        $scope.errorpopup = "State is empty";
                        return false;
                    } else if ($scope.mainMember.zip === "" || $scope.mainMember.zip === " ") {
                        $scope.errorpopup = "Zip Code is empty";
                        return false;
                    } else if ($scope.mainMember.phone === "" || $scope.mainMember.phone === " ") {
                        $scope.errorpopup = "Phone is empty";
                        return false;
                    } else if ($scope.mainMember.medical === "" || $scope.mainMember.medical === " ") {
                        $scope.errorpopup = "Medical Issue is empty";
                        return false;
                    } else if ($scope.mainMember.medical === "Yes" && $scope.mainMember.medicalDesc === "") {
                        $scope.errorpopup = "Medical Description is empty";
                        return false;
                    } else if ($scope.mainMember.emergencyFirstName === "" || $scope.mainMember.emergencyFirstName === " ") {
                        $scope.errorpopup = "Emergency First Name is empty";
                        return false;
                    } else if ($scope.mainMember.emergencyLastName === "" || $scope.mainMember.emergencyLastName === " ") {
                        $scope.errorpopup = "Emergency Last Name is empty";
                        return false;
                    } else if ($scope.mainMember.emergencyPhone === "" || $scope.mainMember.emergencyPhone === " ") {
                        $scope.errorpopup = "Emergency Phone Number is empty";
                        return false;
                    } else if ($scope.mainMember.emergencyRelationship === "" || $scope.mainMember.emergencyRelationship === " ") {
                        $scope.errorpopup = "Emergency Relationship is empty";
                        return false;
                    } else if ($scope.mainMember.methodOfPayment === "" || $scope.mainMember.methodOfPayment === " ") {
                        $scope.errorpopup = "Method of Payment is empty";
                        return false;
                    } else {
                        return true;
                    }
                }
            }

            $scope.submit = function (){
                if(isReadyToSubmit()) {
                    $scope.errorpopup = "";
                    var address = $scope.mainMember.address + ' ' + $scope.mainMember.address2 + ' ' + $scope.mainMember.city + ' ' +
                        $scope.mainMember.state + ' ' + $scope.mainMember.zip;
                    $.ajax({
                        url: "https://docs.google.com/forms/d/e/1FAIpQLSdY2Je4WcNPkMs27aAADbaF4E5iH6biWUhVwZqz18BvbcbMFA/formResponse",
                        data: {
                            "entry.852805865": $scope.mainMember.firstName,
                            "entry.1666999625": $scope.mainMember.lastName,
                            "entry.1035954706": $scope.mainMember.shirtSize,
                            "entry.1165623676": $scope.mainMember.gender,
                            "entry.736906667": $scope.mainMember.age,
                            "entry.906671770": $scope.mainMember.relationship,
                            "entry.170736755": address,
                            "entry.1725771503": $scope.mainMember.phone,
                            "entry.1662824886": $scope.mainMember.email,
                            "entry.533389635": $scope.mainMember.homeChurch,
                            "entry.1651271441": $scope.mainMember.churchPhone,
                            "entry.162274431": $scope.mainMember.medical,
                            "entry.372693286": $scope.mainMember.medicalDesc,
                            "entry.837390161": $scope.mainMember.emergencyFirstName,
                            "entry.57695788": $scope.mainMember.emergencyLastName,
                            "entry.706727831": $scope.mainMember.emergencyPhone,
                            "entry.1277356253": $scope.mainMember.emergencyRelationship,
                            "entry.513632018": $scope.mainMember.methodOfPayment
                        },
                        type: "POST",
                        dataType: "xml",
                        statusCode: {
                            0: function () {
                                alert("You have successfully registered!");
                            },
                            200: function () {
                                alert("You have successfully registered! 200");
                            }
                        }
                    });

                    if($scope.registerMembers.length > 0){
                        $scope.registerMembers.forEach(function(registerMember){
                            $.ajax({
                                url: "https://docs.google.com/forms/d/e/1FAIpQLSdY2Je4WcNPkMs27aAADbaF4E5iH6biWUhVwZqz18BvbcbMFA/formResponse",
                                data: {
                                    "entry.852805865": registerMember.firstName,
                                    "entry.1666999625": registerMember.lastName,
                                    "entry.1035954706": registerMember.shirtSize,
                                    "entry.1165623676": registerMember.gender,
                                    "entry.736906667": registerMember.age,
                                    "entry.906671770": registerMember.relationship + ' to ' + $scope.mainMember.firstName + ' ' + $scope.mainMember.lastName,
                                    "entry.170736755": address,
                                    "entry.1725771503": $scope.mainMember.phone,
                                    "entry.1662824886": $scope.mainMember.email,
                                    "entry.533389635": $scope.mainMember.homeChurch,
                                    "entry.1651271441": $scope.mainMember.churchPhone,
                                    "entry.162274431": $scope.mainMember.medical,
                                    "entry.372693286": $scope.mainMember.medicalDesc,
                                    "entry.837390161": $scope.mainMember.emergencyFirstName,
                                    "entry.57695788": $scope.mainMember.emergencyLastName,
                                    "entry.706727831": $scope.mainMember.emergencyPhone,
                                    "entry.1277356253": $scope.mainMember.emergencyRelationship,
                                    "entry.513632018": $scope.mainMember.methodOfPayment
                                },
                                type: "POST",
                                dataType: "xml"
                            });
                        })
                    }
                }else{
                    $window.scrollTo(0, 0);
                }
            }
        }]);