<template>
  <div>
    <section class="text-center mb-5">
      <b-row align-v="center">
        <b-col class="ml-5 text-left">
          <h1 class="mb-3">Bingung Masak Apa?</h1>
          <h3 class="text-muted">my-resepindo hadir menyediakan resep indonesia terbaik untukmu</h3>
        </b-col>
        <b-col>
          <b-img
            :src="require ('@/assets/chef.svg')"
          />
        </b-col>
      </b-row>
    </section>
    <section>
      <b-row align-h="center">
        <div class="wrapper">
          <b-form-input 
            placeholder="Cari Resep..." 
            v-model="searchParam" size="lg" 
            type="search"
            @keydown.enter="submitRecipes(searchParam)"
          >
          </b-form-input>
          <b-btn variant="warning" size="lg" class="btnSearch" @click="submitRecipes(searchParam)">
            <b-icon icon="search"></b-icon>
          </b-btn>
        </div>
      </b-row>
    </section>
    <template v-if="searchLoading == true">
      <b-row align-h="center">
        <b-spinner 
            style="width: 3rem; height: 3rem; color: #e78200;" 
            label="Loading..."
            class="mb-3 mt-3"
        >
        </b-spinner>
      </b-row>
    </template>
    <template v-if="searchRecipes.length !== 0">
      <section class="mt-3 mb-3">
        <b-row align-h="center">
          <h2> Hasil Pencarian</h2>
        </b-row>
      </section>
      <section>
        <CardRecipeSearch
          :items="searchRecipes"
          :myTitle="'Suka'"
          :myIcon="'heart'"
        />
      </section>
    </template>

    <section class="mt-3 mb-3">
      <b-row align-h="center">
        <h2> Rekomendasi Untukmu Hari Ini </h2>
      </b-row>
    </section>
    <section>
      <CardRecipe 
        :items="recipes"
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
import {mapState, mapActions} from 'vuex'
import CardRecipe from '@/components/CardRecipe'
import CardRecipeSearch from '@/components/CardRecipeSearch'
export default {
  name: 'Home',
  components: {
    CardRecipe,
    CardRecipeSearch
  },
  data(){
    return{
      searchParam: '',
      searchLoading: false,
    }
  },
  computed: {
    
    ...mapState(['recipes', 'searchRecipes']),

  },
  methods: {
    
    ...mapActions(['getRecipes', 'getSearchRecipes']),

    async submitRecipes(param){
      this.searchLoading = true
      await this.getSearchRecipes(param)
      this.searchLoading = false
    }

  },
  async created(){
    await this.getRecipes()
  },
}
</script>

<style scoped>
  
  .form-control{
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    min-width: 350px;
  }

  .form-control:focus{
    box-shadow: none;
  }

  .form-inline {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .btnSearch {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .wrapper{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

</style>