import { onUnmounted, onMounted, ref } from 'vue'

export function useGeolocation() {
    const coords = ref({ latitude: 0, longitude:0 })

    //check if browser supports geolocation
    const isSupported = 'navigator' in window && 'geolocation' in navigator

    let watcher = null
    onMounted(() => {
        if (isSupported)
            //navigator.geolocation object in order to get data about a device’s current position
            //watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes.
            watcher = navigator.geolocation.watchPosition(
                position => (coords.value = position.coords)
                //Position.coords: Contains a Coordinates object that describes the location
            )
    })
    onUnmounted(() => {
        if (watcher) navigator.geolocation.clearWatch(watcher)
    })

    return {coords, isSupported}
}