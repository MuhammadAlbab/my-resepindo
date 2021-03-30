<template>
  <div>
    <section class="mt-3 mb-3">
        <b-row align-h="center">
            <h2 class="text-capitalize">{{$route.params.id.replace('-', ' ')}}</h2>
        </b-row>
    </section>

    <section>
        <CardRecipe 
            :items="recipesByCategory.slice(1)"
        />
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