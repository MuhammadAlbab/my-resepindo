<template >
  <b-modal
    v-model="detailModal"
    no-close-on-backdrop
    size="xl"
    centered
    hide-header
  >
    <template #default>
      <div 
        v-if="isLoading"
      >
        loading
      </div>
      <div 
        v-else
      >
        <div v-if="detailRecipe.thumb" class="text-center mb-3">
          <img :src="detailRecipe.thumb" alt="thumbnail" class="tes">
          <h5 class="mt-3 mb-2"><strong>{{item.title.substring(5, item.title.indexOf(','))}}</strong></h5>
          <p class="mb-0">by: </p>
          <p class="mt-0">{{detailRecipe.author.user}} - {{detailRecipe.author.datePublished}}</p>
        </div>
        <div>
          <div class="mb-3 text-center">
            <strong>Bahan yang dibutuhkan:</strong>
          </div>
          <b-row>
            <b-col
              v-for="(ingredient, indexI) in detailRecipe.ingredient" 
              :key="indexI"
              cols="12"
              md="3"
              class="bahan text-center"
            >
              <p>{{ingredient}}</p>
            </b-col>
          </b-row>
        </div>
        <div>
          <div class="mb-3 text-center">
            <strong>Langkah-langkah:</strong>
          </div>
          <p 
            v-for="(step, indexS) in detailRecipe.step" 
            :key="indexS"
            class="text-justify"
          >
            {{step}}
          </p>
        </div>
      </div>
    </template>

    <template #modal-footer>
      <b-button size="sm" variant="warning">
        Simpan
      </b-button>
      <b-button size="sm" variant="danger" @click="closeModal">
        Cancel
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'DetailModal',
    props: ['item', 'index', 'detailModal'],
    data(){
      return {
        isLoading: false,
      }
    },
    computed: {
      ...mapState(['detailRecipe'])
    },
    methods: {
      ...mapActions(['getDetails']),
      closeModal(){
        this.$emit('closeModal', false)
      }
    },
    watch: {
      async detailModal(val){
        if (val){
          this.isLoading = true
          await this.getDetails(this.item.key)
          this.isLoading = false
        }
      }
    }
}
</script>

<style scoped>

  .bahan {
    border-bottom: 1px solid #e78200;
    margin-bottom: 20px;
  }

</style>