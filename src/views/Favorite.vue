<template>
  <div>
    <section class="mt-3 mb-3">
      <b-row align-h="center">
        <h2> Resep Favorite Kamu</h2>
      </b-row>
    </section>

    <section>
      <CardRecipe 
        :items="data"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardRecipe from '@/components/CardRecipe'
export default {    
    name: 'Favorite',
    components: {
      CardRecipe
    },
    data(){
      return {
        data: []
      }
    },
    computed: {
      ...mapState(['favorites'])
    },
    created(){
      this.data = this.favorites
    },
    watch: {
        favorites(val){
          if(val){
            this.data = this.favorites
          }
        }
    }
}
</script>

<style>

</style>