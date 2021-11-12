<template>
  <br><br>
  <br><br>
  <br><br>
  <br><br>
  <div class="row">
    <!--Grid column-->
    <div class="col-lg-5 mb-4">
      <!--Form with header-->
      <div class="card">
        <div class="card-body">
          <!--Header-->
          <div class="form-header">
            <h3>Help is in your way!</h3>
          </div>
          <p>this map is currently in progress :) </p>
          <br>
          <div class="form-header" style="color:red;" v-show="error">
            <h2>{{error}}</h2>
          </div>
          <!--Body-->
          <div class="md-form" >
              <!--User input his/her LOCATION automatically or manually-->
                <div class="input-group">
                    <input
                    type="text"
                    id="autocomplete"
                    class="form-control"
                    placeholder="Enter a location"
                    v-model="address"
                    />
                    <button type="button" @click="userLocationButton" class="btn btn-danger">
                        <i class="bi bi-geo-alt-fill"></i>
                    </button>
                </div>
          </div>
          <br><br>
          <div class="md-form" >
            <div class="input-group">
                <!--User input his/her DESTINATION automatically or manually-->
                <input
                    type="text"
                    id="autocomplete"
                    class="form-control"
                    placeholder="Your Destination"
                    v-model="address"
                />
                <button type="button" class="btn btn-primary">
                    <i class="bi bi-box-arrow-right"></i>
                </button>
            </div>
          </div>
        </div>
      </div>
      <!--Form with header-->
    </div>
    <!--Grid column-->
    <!--Grid column-->
    <div class="col-lg-7">
      <!--Google map-->
      <div id="map" class="z-depth-1-half map-container-6" style="height: 400px">
        <!--<div ref="mapDiv" style="width: 700px; height:400px"></div> -->
      </div>
    </div>
  </div>
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
        let autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("autocomplete"),
            //searches is set to SG region
            {
                // eslint-disable-next-line no-undef
                bounds: new google.maps.LatLngBounds(
                    // eslint-disable-next-line no-undef
                    new google.maps.LatLng(1.290270, 103.851959)
                )
            },
            {
                componentRestrictions: { country: "sg" },
            }

        )
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
        calculateRoute() {
            //create request
        }


    }
}//export

</script>
