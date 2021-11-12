<template>
<header class="bg-light py-5">
    <div class="container px-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
                <div class="text-center my-5">
                    <h1 class="display-5 fw-bolder text-success mb-2">Map is the new way</h1>
                    <p class="text-secondary-50 mb-5">I wanted to have hospital/doctor to be suggested according to your location but i suck</p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                        <a class="btn btn-info text-white btn-lg px-4" href="#feedback">Tell Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- MAP Features section-->
<section class="py-5 border-bottom" id="features">
    <div class="container px-5 my-5">
        <div class="row gx-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="form-header">
                    <h3>Search a location</h3>
                </div>
                    <p>this map is currently in progress :) </p>
                    <br>
                <div class="form-header" style="color:red;" v-show="error">
                    <h2>{{error}}</h2>
                </div>
                <div class="input-group">
                    <input
                        type="text"
                        id="autocomplete"
                        class="form-control"
                        placeholder="Enter a location"
                        v-model="address"
                    />
                    <button type="button" @click="userLocationButton" class="btn btn-outline-danger">
                        <i class="bi bi-geo-alt-fill"></i>
                    </button>
                </div>
            </div>
                    
            <div class="col-lg-8 mb-5 mb-lg-0">
                <div id="map" style="height: 400px"></div>
            </div>
        </div>
    </div>
</section>
<!-- Contact section-->
<section class="bg-light py-5" id="feedback">
    <div class="container px-5 my-5 px-5">
        <div class="text-center mb-5">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                <h2 class="fw-bolder">Get in touch</h2>
                <p class="lead mb-0">We'd love to hear from you</p>
            </div>

            <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <form id="contactForm">
                            <!-- Name input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name" />
                                <label for="name">Full name</label>
                            </div>
                            <!-- Email address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com"/>
                                <label for="email">Email address</label>
                            </div>
                            <!-- Phone number input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(65) 9123-7890" />
                                <label for="phone">Phone number</label>
                            </div>
                            <!-- Message input-->
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" ></textarea>
                                <label for="message">Message</label>
                            </div>
                            <!-- Submit Button-->
                            <div class="d-grid"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
        </div>
    </div>
</section>

</template>

<script>
import axios from 'axios'

export default {

    data() {
        return{
            address: "",
            error: ""
        }
    },//data
    
    mounted() {
        //call DOM, autocomplete object
        // eslint-disable-next-line no-undef
        var options = {
                // eslint-disable-next-line no-undef
                bounds: new google.maps.LatLngBounds(
                    // eslint-disable-next-line no-undef
                    new google.maps.LatLng(1.290270, 103.851959)
                ),
                //search only sg region
                componentRestrictions: {
                    country: "sg"
                },
        }
        // eslint-disable-next-line no-undef
        let autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"), options);

        autocomplete.addListener("place_changed", () =>{
            let place = autocomplete.getPlace();
            console.log(place);
            this.showUserLocationOnTheMap(
                place.geometry.location.lat(),
                place.geometry.location.lng()
            )
        });
        //initMAP
        // eslint-disable-next-line no-undef
        new google.maps.Map(document.getElementById("map"), {
            // I made it a global so I can use it in out events
            zoom: 10,
            center: { // Set to singapore
                lat: 1.290270,
                lng: 103.851959
            }
        });
    }, //mounted
    methods: {
        userLocationButton() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.getAddressFrom(
                            position.coords.latitude,
                            position.coords.longitude
                        );
                        //console.log(position.coords.latitude);
                        //console.log(position.coords.longitude);
                        this.showUserLocationOnTheMap(
                            position.coords.latitude,
                            position.coords.longitude
                        )
                    },
                    // eslint-disable-next-line no-unused-vars
                    error => {
                        //this is use when declaring something from the data function
                        this.error = error.message;
                        //console.log(error.message);
                    }
                );
            } else {
                // eslint-disable-next-line no-undef
                this.error = "Your browser does not support geolocation API ";
                //console.log("Your browser does not support geolocation API ");
            }
        },
        getAddressFrom(lat, lng) {
            axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
            + lat +
            ","
            + lng
            + "&key=AIzaSyAQTMFOpjhv6TLGnQRtGA0pCQ9r4W8YKjI")
            .then(response => {
                if(response.data.error_message) {
                    this.error = response.data.error_message;
                    //console.log(response.data.error_message);
                } else {
                    //GEOCODING API
                    this.address = response.data.results[0].formatted_address
                    console.log(response.data.results[0].formatted_address);
                }
            })
            .catch(error => {
                this.error = error.message;
                console.log(error.message);
            });
        },
        showUserLocationOnTheMap(latitude, longitude) {
            //Create the Map object
            // eslint-disable-next-line no-undef
            let map = new google.maps.Map(document.getElementById("map"), {
                mapTypeId: "roadmap",
                // eslint-disable-next-line no-undef
                center: new google.maps.LatLng(latitude, longitude),
                zoom: 15
            });
            //Add Marker to user location
            // eslint-disable-next-line no-undef
            new google.maps.Marker({
                // eslint-disable-next-line no-undef
                position: new google.maps.LatLng(latitude, longitude),
                map: map,
                zoom: 6
            })
        },
        // A Nearby Search lets you search for places within a specified area
        // by keyword or type. A Nearby Search must always include a location,
        // which can be specified in one of two ways:
        searchNearby() {

        }
    }
}//export

</script>

<style>

</style>