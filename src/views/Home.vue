<template>
  <div>
    <section class="text-center mb-5">
      <b-row align-v="center">
        <b-col class="ml-5 text-left">
          <h1 class="mb-3">Bingung Masak Apa?</h1>
          <h3>Kami hadir menyediakan resep indonesia terbaik untukmu</h3>
        </b-col>
        <b-col>
          <b-img
            :src="require ('@/assets/chef.svg')"
          />
        </b-col>
      </b-row>
    </section>

    <section class="mt-3 mb-3">
      <b-row align-h="center">
        <h2> Rekomendasi Untukmu Hari Ini </h2>
      </b-row>
    </section>

    <section>
      <CardRecipe 
        :items="recipes"
      />
    </section>

    <section class="text-center">
      <b-btn pill variant="outline-dark">
        Lihat Lebih Banyak
      </b-btn>
    </section>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import CardRecipe from '@/components/CardRecipe'
export default {
  name: 'Home',
  components: {
    CardRecipe
  },
  data(){
    return{
      
    }
  },
  computed: {
    
    ...mapState(['recipes']),

  },
  methods: {
    
    ...mapActions(['getRecipes']),

  },
  async created(){
    await this.getRecipes()
  },
}
</script>

<style scoped>

</style>