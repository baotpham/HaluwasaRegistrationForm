/**
 * Created by baothienpham on 3/27/17.
 */

angular.module('app.controllers', [])


    .controller('registrationPageCtrl', ['$scope', 'RegistersData',

        function ($scope, RegistersData) {

            $scope.registers =[];

            $scope.info = {
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
                medical: false,
                medicalDesc: "",
                emergencyFirstName: "",
                emergencyLastName: "",
                emergencyPhone: "",
                emergencyRelationship: "",
                methodOfPayment: ""
            };

            var registerCount = 0;
            var readyToAddAnotherMember = false;


            var anotherMemberHTML = '<table style="text-align: start">' +
                '<tr>' +
                '<th style="width: 20%">' +
                '<label class="haluwasa-label-input-field" for="firstName" >First Name*</label>' +
                '<input ng-model="info.firstName" style="width: 100%" type="text" id="firstName" name="firstName" required>' +
                '</th>'+
                '<th style="width: 20%">'+
                '<label class="haluwasa-label-input-field" for="lastName">Last Name*</label>' +
                '<input ng-model="info.lastName" style="width: 100%" type="text" id="lastName" name="lastName" required>' +
                '</th>'+
                '<th style="width: 6%">'+
                '<label class="haluwasa-label-input-field" for="shirtSize">Size*</label>'+
                '<select ng-model="info.shirtSize" style="height: 70px; width: 100%;" id="shirtSize" name="shirtSize" required>'+
                '<option value="S">S</option>'+
                '<option value="M">M</option>'+
                '<option value="L">L</option>'+
                '</select>'+
                '</th>'+
                '<th style="width: 10%">'+
                '<label class="haluwasa-label-input-field" for="dob">DOB*</label>'+
                '<input ng-model="info.dob" style="width: 100%" type="date" id="dob" name="dob">'+
                '</th>'+
                '<th style="width: 6%">'+
                '<label class="haluwasa-label-input-field" for="gender">Gender*</label>'+
                '<select ng-model="info.gender" style="height: 70px; width: 100%" id="gender" name="gender" required>'+
                '<option value="F">F</option>'+
                '<option value="M">M</option>'+
                '</select>'+
                '</th>'+
                '<th style="width: 6%">'+
                '<label class="haluwasa-label-input-field" for="age">Age*</label>'+
                '<input ng-model="info.age" style="width: 100%" type="text" id="age" name="age" required>'+
                '</th>'+
                '<th style="width: 20%">'+
                '<label class="haluwasa-label-input-field" for="relationship">Relationship*</label>' +
                '<input ng-model="info.relationship" style="width: 80%; margin-right: 10px;" type="text" id="relationship" name="relationship" required>'+
                '<img src="../../img/deleteAMember.png" width="20px" alt="deleteButton" class="deleteMember">'+
                '</th>'+
                '</tr>'+
                '</table>';



            $scope.addAnotherMember = function(){

                if(isReadyToAddAnotherMember()){
                    document.getElementById("anotherMember").innerHTML += anotherMemberHTML;
                    RegistersData.setRegisterData($scope.info);
                    $scope.registers.push(RegistersData.getRegisterData());
                    console.log("registrationFormCtrl: added a member");
                    registerCount++;
                }else{
                    alert("Please fill out the information for current register first!");
                }


            };

            function isReadyToAddAnotherMember(){
                if($scope.info.firstName === "" || $scope.info.lastName === " "){
                    readyToAddAnotherMember = false;
                }else{
                    readyToAddAnotherMember = true;
                }
            }

            $scope.deleteMember = function(){

                console.log("registrationFormCtrl: deleted a member");
            };
        }]);