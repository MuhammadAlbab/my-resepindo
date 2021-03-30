<template>
  <div>
    <section class="mt-3 mb-3">
      <b-row align-h="center">
        <h2>Terbaru</h2>
      </b-row>
      <b-row align-h="center">
        <b-col cols="12">
          <b-carousel
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            class="resep-slide"
          >
            <b-carousel-slide 
              v-for="(item, index) in newRecipes" :key="index"
              :img-src="item.thumb"
              :caption="item.title"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut doloremque similique illo quo illum molestias deserunt fugiat ipsam assumenda?"
            >
              <b-btn 
                variant="transparent"
                v-b-tooltip.hover title="Detail Resep"
                @click="detailResep(item, index)"
              >
                <b-icon 
                  icon="exclamation-circle" 
                  variant="warning"
                  animation="fade"
                >
                </b-icon>
              </b-btn>
              <b-btn 
                variant="transparent"
                v-b-tooltip.hover title="Suka"
              >
                <b-icon 
                  icon="heart" 
                  variant="warning"
                  animation="fade"
                >
                </b-icon>
              </b-btn>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row align-h="center">
        <h2>Kategori</h2>
      </b-row>
      <b-row align-h="center">
          <b-card
            v-for="(cat, index) in category"
            :key="index"
            overlay
            :img-src="categoryPics[index].pic"
            img-height="180"
            img-alt="Card Image"
            class="category-card"
            @click="clickCategory(cat)"
          >
            <b-container class="container-catergory">
              <div class="category-text">{{cat.category}}</div>
            </b-container>
          </b-card>
      </b-row>
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
import { mapActions, mapState } from 'vuex';
import DetailModal from '@/components/DetailModal'
  export default {
    name: 'Resep',
    components: {
      DetailModal,
    },
    data() {
      return {
        detailModal: false,
        item: '',
        index: '',
        slide: 0,
        sliding: null,
        categoryPics: [
          {pic: require('@/assets/CategoryPic/hariraya.jpeg')},
          {pic: require('@/assets/CategoryPic/tradisional.jpeg')},
          {pic: require('@/assets/CategoryPic/makanmalam.jpg')},
          {pic: require('@/assets/CategoryPic/makansiang.jpg')},
          {pic: require('@/assets/CategoryPic/resepayam.jpg')},
          {pic: require('@/assets/CategoryPic/resepdaging.jpg')},
          {pic: require('@/assets/CategoryPic/resepsayur.jpg')},
          {pic: require('@/assets/CategoryPic/resepseafood.jpg')},
          {pic: require('@/assets/CategoryPic/sarapan.jpg')},
        ],
        
      }
    },
    computed: {

      ...mapState(['newRecipes', 'category']),

    },
    methods: {
      ...mapActions(['getNewRecipes', 'getCategory']),
      /* eslint-disable */
      onSlideStart(slide) {
        this.sliding = true
      },
      /* es-lint-disabled */
      onSlideEnd(slide) {
        this.sliding = false
      },

      detailResep(item, index){
        this.item = item
        this.index = index
        this.detailModal = !this.detailModal
      },

      closeModal(){
        this.detailModal = false
      },

      clickCategory(cat){
        this.$router.push(`/resep/${cat.key}`)
      }

    },

    async created(){
      await this.getNewRecipes()
      await this.getCategory()
    }
  }
</script>

<style scoped>

  .category-card{
    width: 340px;
    border: 1px solid rgba(231, 130, 0, .8);
  }

  .category-card:hover{
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
  }

  .category-card img {
    filter: brightness(50%);
  }

  .container-catergory{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-text {
    color: white;
    font-size: 1.5em;
  }

  .resep-slide {
    -webkit-box-shadow: 10px 10px 5px 0px rgba(231, 130, 0, .8);
    -moz-box-shadow: 10px 10px 5px 0px rgba(231, 130, 0, .8);
    box-shadow: 10px 10px 5px 0px rgba(231, 130, 0, .8);
  }

</style>