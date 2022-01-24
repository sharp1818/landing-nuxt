<template>
  <div>
    <h1>
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  justify-content: center;
  align-items:center;
  text-align: center;
  color: white;
  letter-spacing: 4px;
}
</style>
