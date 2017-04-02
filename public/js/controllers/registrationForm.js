/**
 * Created by baothienpham on 3/27/17.
 */

angular.module('app.controllers', [])


    .controller('registrationPageCtrl', ['$scope', 'RegistersData', '$window',

        function ($scope, $window, RegistersData) {

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
                }else if(age >= 6 && age <= 11){
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

            $scope.submit = function (){

                var address = $scope.mainMember.address + ' ' + $scope.mainMember.address2 + ' ' + $scope.mainMember.city + ' ' +
                                $scope.mainMember.state + ' ' + $scope.mainMember.zip;
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSdY2Je4WcNPkMs27aAADbaF4E5iH6biWUhVwZqz18BvbcbMFA/formResponse",
                    data: {
                        "entry.852805865"  : $scope.mainMember.firstName,
                        "entry.1666999625" : $scope.mainMember.lastName,
                        "entry.1035954706" : $scope.mainMember.shirtSize,
                        "entry.1509131140" : $scope.mainMember.dob,
                        "entry.1165623676" : $scope.mainMember.gender,
                        "entry.736906667" : $scope.mainMember.age,
                        "entry.906671770" : $scope.mainMember.relationship,
                        "entry.170736755" : address,
                        "entry.1725771503" : $scope.mainMember.phone,
                        "entry.1662824886" : $scope.mainMember.email,
                        "entry.533389635" : $scope.mainMember.homeChurch,
                        "entry.1651271441" : $scope.mainMember.churchPhone,
                        "entry.162274431" : $scope.mainMember.medical,
                        "entry.372693286" : $scope.mainMember.medicalDesc,
                        "entry.837390161" : $scope.mainMember.emergencyFirstName,
                        "entry.57695788" : $scope.mainMember.emergencyLastName,
                        "entry.706727831" : $scope.mainMember.emergencyPhone,
                        "entry.1277356253" : $scope.mainMember.emergencyRelationship,
                        "entry.513632018" : $scope.mainMember.methodOfPayment
                        // "entry.852805865"  : $scope.mainMember.firstName,
                        // "entry.1666999625" : "Pham",
                        // "entry.1035954706" : "S",
                        // "entry.1509131140" : "01/2",
                        // "entry.1165623676" : "Male",
                        // "entry.736906667" : "20",
                        // "entry.906671770" : "friend",
                        // "entry.170736755" : "608 Los",
                        // "entry.1725771503" : "2676251223",
                        // "entry.1662824886" : "asdf@yahoo.com",
                        // "entry.533389635" : "my church",
                        // "entry.1651271441" : "123121111",
                        // "entry.162274431" : "Yes",
                        // "entry.372693286" : "i'm sick",
                        // "entry.837390161" : "emerFisrt",
                        // "entry.57695788" : "emerLast",
                        // "entry.706727831" : "2341231111",
                        // "entry.1277356253" : "father",
                        // "entry.513632018" : "Cash"
                    },
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function() {
                            //Success message
                        },
                        200: function() {
                            //Success Message
                        }
                    }
                });
            }

        }]);