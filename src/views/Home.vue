<template>
  <div>
    <section class="mt-5 mb-5">
      <div class="row justify-content-center">
        <h2>Resep untukmu hari ini!</h2>
      </div>
    </section>

    <section class="content">
      <b-card
        v-for="(item, index) in recipes.slice(4)" :key="index"
        border-variant="warning"
        class="card"
      >
        <div class="row justify-content-center">
          {{item.title.substring(5, item.title.indexOf(','))}}
        </div>
        <img 
          :src="item.thumb" 
          alt="thumbnail"
          width="300"
        >
        <template #footer>
          <div class="row justify-content-start ml-1">
            <small class="text-muted">Tingkat Kesulitan: {{item.dificulty}}</small>
          </div>
          <div class="row justify-content-start ml-1">
            <small class="text-muted">Waktu masak: {{item.times}}</small>
          </div>
        </template>
        <div class="row justify-content-end mt-2">
          <b-btn 
            class="mb-n5 mr-1"
            variant="dark"
            v-b-tooltip.hover title="Detail Resep"
            @click="detailResep(item, index)"
          >
            <b-icon 
              icon="exclamation-circle" 
              animation="fade"
              variant="warning"
            >
            </b-icon>
          </b-btn>
          <b-btn 
            class="mb-n5"
            variant="dark"
            v-b-tooltip.hover title="Simpan Resep"
          >
            <b-icon 
              icon="bookmark-plus" 
              animation="fade"
              variant="warning"
            >
            </b-icon>
          </b-btn>
        </div>
    </b-card>
    </section>
    <DetailModal 
      :item="item" 
      :index="index" 
      :detailModal="detailModal"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import DetailModal from '@/components/DetailModal'
export default {
  name: 'Home',
  components: {
    DetailModal,
  },
  data(){
    return{
      detailModal: false,
      item: '',
      index: ''
    }
  },
  computed: {
    
    ...mapState(['recipes']),

  },
  methods: {
    
    ...mapActions(['getRecipes']),
    
    detailResep(item, index){
      this.item = item
      this.index = index
      this.detailModal = !this.detailModal
    },

    closeModal(){
      this.detailModal = false
    }

  },
  async created(){
    await this.getRecipes()
    console.log(this.recipes);
  },
}
</script>

<style scoped>

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .card {
    margin-bottom: 50px;
    margin-right: 10px;
  }

</style>