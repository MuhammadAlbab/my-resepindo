<template>
  <div>
    <section class="mt-3 mb-3">
        <b-row align-h="center">
            <h2 class="text-capitalize">{{$route.params.id.replace('-', ' ')}}</h2>
        </b-row>
    </section>


    <section v-if="recipesByCategory == undefined">
      <b-row align-h="center">
        <h2>Resep tidak tersedia</h2>
      </b-row>
    </section>

    <section v-else>
        <CardRecipe 
            :items="recipesByCategory.slice(1)"
            :myTitle="'Suka'"
            :myIcon="'heart'"
        />
    </section>

    <section class="text-center">
      <router-link to="/resep" custom v-slot="{ navigate }">
        <b-btn 
          pill variant="outline-dark"
          @click="navigate"
        >
          Lihat Lebih Banyak
        </b-btn>
      </router-link>
    </section>
    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CardRecipe from '@/components/CardRecipe'
export default {
    name: 'ResepKategori',
    components: {
        CardRecipe,
    },
    data(){
        return{

        }
    },
    computed: {
        ...mapState(['recipesByCategory'])
    },
    methods: {
        ...mapActions(['getRecipesByCategory'])
    },
    async created(){
        await this.getRecipesByCategory(this.$route.params.id)
    }
}
</script>

<style>

</style>