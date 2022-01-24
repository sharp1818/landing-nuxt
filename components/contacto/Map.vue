<template>
  <GmapMap
    :center="center"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 300px"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
export default {
  data () {
    return {
      center: { lat: -12.059699911784298, lng: -77.11536042725814 },
      markers: [
        {
          position: { lat: -12.059699911784298, lng: -77.11536042725814 }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
