<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted } from 'vue'
import { useGeolocation } from './useGeolocation'
import { Loader } from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = 'AIzaSyAQTMFOpjhv6TLGnQRtGA0pCQ9r4W8YKjI'

export default {
  name: 'Locator',
  props: {
    center: { lat: Number, lng: Number},
    zoom: Number,
    mapTypeId: String

  },

  setup() {
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    const loader = new Loader({ 
      apiKey: GOOGLE_MAPS_API_KEY,
      libraries: ['places'] //Places API 
    });
    const mapDiv = ref(null)
    let map = ref(null)
    let marker = ref(null)

    let result_lat = ref(null)
    let result_lng = ref(null)

    //initialise Map
    onMounted(async () => {
      await loader.load()
      new google.maps.Map(mapDiv.value, {
        mapTypeId: "roadmap",
        center: currPos.value,
        zoom: 11
      })

      marker = new google.maps.Marker ({
        map: map.value,
        draggable: true, //marker can be dragged
        animation: google.maps.Animation.DROP,
        position: currPos.value
      })

      google.maps.event.addListener(marker, 'dragend', function() {
        result_lat.value = marker.value.getPosition().lat()
        result_lng.value = marker.value.getPosition().lng()
      })

      //AUTOCOMPLETE
      const userInput = document.getElementById('form-user-location');
      const options = {
        componentRestrictions: {country: 'SG'},
        types: ['geocode']
      }

      const autocomplete = new google.maps.places.Autocomplete (userInput, options);
      google.maps.event.addListener(autocomplete, 'place_changed', function () {
        //obtain place
        var place = autocomplete.getPlace();

        console.log(place)

        map.value.setCenter(place.geometry.location)
        marker.value.setPosition(place.geometry.location)
      })

      result_lng.value = place.geometry.location.lat();
      result_lng.value = place.geometry.location.lng();
    })
    
    return { currPos, mapDiv }
  }
}
</script>

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

          <!--Body-->
          <div class="md-form">
            <i class="fas fa-user prefix grey-text"></i>
            <label for="form-user-location">Your Location</label>
            <input type="text" id="form-user-location" class="form-control">
          </div>

          <div class="text-center mt-4">
            <button type="button" class="btn btn-primary">Show my location</button>
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
        <div ref="mapDiv" style="width: 700px; height:400px"></div>
      </div>
    </div>
  </div>
</template>