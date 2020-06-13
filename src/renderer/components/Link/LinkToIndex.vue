<template>
  <span class="tooltip">
    <router-link to="/" id="linkToTop">
      <i class="fas fa-home"></i>
    </router-link>
    <span class="tooltiptext">ホームへ</span>
  </span>
</template>
<script>
export default {
  name: 'LinkToTop'
}
</script>

<style>
#linkToTop{
  font-size: 2em;
}
</style>