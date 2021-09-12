<template>
  <div class="main1">
    <WhatWeDo/>
    <HowWeDo/>
    <ForWho/>
    <Crew/>
    <GladToWork/>
  </div>
</template>

<script>
import WhatWeDo from '@/views/WhatWeDo.vue';
import HowWeDo from '@/views/HowWeDo.vue';
import ForWho from '@/views/ForWho.vue';
import Crew from '@/views/Crew.vue';
import GladToWork from '@/views/GladToWork.vue';

export default {
  name: 'main1',
  components: {
    WhatWeDo,
    HowWeDo,
    ForWho,
    Crew,
    GladToWork
  },

  created() {
    this.$store.dispatch('Backend/GET_CONTENT')
    this.$store.dispatch('Backend/GET_CASES')
  },


}
</script>
<style>

</style>