<template >
  <b-modal
    v-model="detailModal"
    no-close-on-backdrop
    size="xl"
    centered
    hide-header
  >
    <template #default>
      <div v-if="isLoading" class="d-flex justify-content-center mb-3">
        <b-spinner 
          style="width: 3rem; height: 3rem; color: #e78200;" 
          label="Loading..."
        >
        </b-spinner>
      </div>
      <div
        v-else
      >
        <div v-if="detailRecipe.thumb" class="text-center mb-3">
          <b-img :src="detailRecipe.thumb" alt="thumbnail" fluid></b-img>
        </div>
        <div>
          <div class="mb-4 text-center">
            <h5 class="mt-3 mb-2"><strong>{{item.title.substring(5, item.title.indexOf(','))}}</strong></h5>
            <p class="mb-0">by: </p>
            <p class="mt-0">{{detailRecipe.author.user}} - {{detailRecipe.author.datePublished}}</p>
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
              <div class="spacer-cool"></div>
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
            {{step.slice(0, 1) + '.' + step.slice(1)}}
          </p>
        </div>
      </div>
    </template>

    <template #modal-footer>
      <b-button size="sm" variant="danger" @click="closeModal">
        TUTUP
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
    margin-bottom: 10px;
  }

</style>