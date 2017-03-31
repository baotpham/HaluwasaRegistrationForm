/**
 * Created by baothienpham on 3/31/17.
 */


angular.module('app.services', [])

    .factory("RegistersData", [function (){

            var registerData = {
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

        return {
            setRegisterData: function (info) {
                registerData = {
                    firstName: info.firstName,
                    lastName: info.lastName,
                    shirtSize: info.shirtSize,
                    dob: info.dob,
                    gender: info.gender,
                    age: info.age,
                    relationship: info.relationship,
                    address : info.address,
                    address2: info.address2,
                    city: info.city,
                    state: info.state,
                    zip: info.zip,
                    phone: info.phone,
                    email: info.email,
                    homeChurch: info.homeChurch,
                    churchPhone: info.churchPhone,
                    medical: info.medical,
                    medicalDesc: info.medicalDesc,
                    emergencyFirstName: info.emergencyFirstName,
                    emergencyLastName: info.emergencyLastName,
                    emergencyPhone: info.emergencyPhone,
                    emergencyRelationship: info.emergencyRelationship,
                    methodOfPayment: info.methodOfPayment
                };
                return true;
            },

            getRegisterData: function () {
                return registerData;
            }
        };

    }]);