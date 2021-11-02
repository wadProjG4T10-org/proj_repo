/* eslint-disable no-undef */
<template>
    <div id="app">

      <div class="container">
            <div class="row">
                <GoogleMap
                    api-key="AIzaSyAQTMFOpjhv6TLGnQRtGA0pCQ9r4W8YKjI"
                    style="max-width: 100%; height: 400px"
                    :center="center"
                    :zoom="15"
                >
                    <Marker :options="{ position: locateGeoLocation() }" />
                </GoogleMap>
            </div>
            <br>
            <div class="row">
                <div class="input-group mb-3" >
                    <input 
                    type="text" 
                    class="form-control"
                    aria-label="userLocation"
                    aria-describedby="button-addon2"
                    placeholder="Enter location"
                    ref="origin"
                    />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-geo" @click="locateGeoLocation"></i></button>
                </div>

                <div class="input-group mb-3">
                    <input 
                    type="text" 
                    class="form-control"
                    aria-label="userDestination"
                    aria-describedby="button-addon2"
                    placeholder="Enter destination"
                    ref="destination"
                    />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-arrow-right"></i></button>
                </div>
            </div>
      </div>
    </div>


</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

//import axios from "axios"

export default defineComponent({
  name: "Map",
  components: { GoogleMap, Marker },
  data() {
        return {
          center: {
            lat: 1.290270,
            lng: 103.851959
            },
            locationMarkers: [],
            locPlaces: [],
            existingPlace: null
          };
  },
  mounted() {
    for (let ref in this.$refs) {
      //console.log(this.$refs[ref])
 
      const autocomplete = new google.maps.places.Autocomplete(
        this.$refs[ref],
        {
          // eslint-disable-next-line no-undef
          bounds: new google.maps.LatLngBounds(
            // eslint-disable-next-line no-undef
            new google.maps.LatLng(1.4504753,104.0120359)
          )
        }
      )
    }

  },
    methods: {
        //Geolocation API => get user's location using browser request
          initMarker(loc) {
            this.existingPlace = loc;
          },
          addLocationMarker() {
            if (this.existingPlace) {
              const marker = {
                lat: this.existingPlace.geometry.location.lat(),
                lng: this.existingPlace.geometry.location.lng()
              };
              this.locationMarkers.push({ position: marker });
              this.locPlaces.push(this.existingPlace);
              this.center = marker;
              this.existingPlace = null;
            }
          },
          locateGeoLocation: function() {
            navigator.geolocation.getCurrentPosition(res => {
              this.center = {
                lat: res.coords.latitude,
                lng: res.coords.longitude
              };
            });
          }
    
        
    }
})

</script>
