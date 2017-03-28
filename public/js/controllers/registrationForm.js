/**
 * Created by baothienpham on 3/27/17.
 */

angular.module('app.controllers', [])


    .controller('registrationPageCtrl', ['$scope',

        function ($scope) {

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
                churchPhone: ""
            };

            $scope.addAnotherMember = function(){
                document.getElementById("anotherMember").innerHTML +=
                    '<table style="text-align: start">' +
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
                            '<input ng-model="info.relationship" style="width: 100%" type="text" id="relationship" name="relationship" required>'+
                        '</th>'+
                        '</tr>'+
                '</table>';
            }
        }]);