<template>
    <vue-flip>
        <template v-slot:front>
            front
        </template>
        <template v-slot:back>
            back
        </template>
    </vue-flip>
</template>

<script src="./script.js"></script>
<script src="https://unpkg.com/vue"></script> 
<script type="text/javascript" src="../node_modules/vue-flip/dist/vueFlip.common.js"></script> 
<script>
    new Vue({
      components: {
        vueFlip
      }
    }).$mount('#app')
</script>