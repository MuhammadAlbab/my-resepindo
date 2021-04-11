<template>
    <section class="content">
        <template>
            <b-card
            v-for="(item, index) in items.slice(0, 12)" :key="index"
            class="card"
            >
                <b-row align-h="center" class="mb-2">
                    <strong>{{theTitle(item.title)}}</strong>
                </b-row>
                <img 
                    :src="item.thumb" 
                    alt="thumbnail"
                    width="300"
                >
                <template #footer>
                <b-row align-h="start" class="ml-1">
                    <small class="text-muted">
                    <b-icon
                        icon="bar-chart"
                    >
                    </b-icon>
                    {{item.difficulty}}
                    </small>
                </b-row>
                <b-row align-h="start" class="ml-1">
                    <small class="text-muted">
                    <b-icon
                        icon="clock"
                    >
                    </b-icon>
                    {{item.times}}
                    </small>
                </b-row>
                </template>
                <b-row align-h="end" class=" mt-2">
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
                        v-b-tooltip.hover 
                        :title="myTitle"
                        @click="likeResep(item, index)"
                    >
                        <b-icon 
                        :icon="myIcon" 
                        animation="fade"
                        variant="warning"
                        >
                        </b-icon>
                    </b-btn>
                </b-row>
            </b-card>
        </template>
        <DetailModal 
            :item="item" 
            :index="index" 
            :detailModal="detailModal"
            @closeModal="closeModal"
        />
    </section>
</template>

<script>
import DetailModal from '@/components/DetailModal'
import { mapActions, mapState } from 'vuex'
import recipesTitle from '@/mixins/recipesTitle'
export default {
    name: 'CardRecipeSearch',
    components: {
        DetailModal,
        
    },
    props: ['items', 'myTitle', 'myIcon'],
    data(){
        return {
            detailModal: false,
            item: '',
            index: '',
        }
    },
    computed: {
        ...mapState(['favorites'])
    },
    methods: {
        ...mapActions(['getFavorites', 'deleteFromFavorites']),

        detailResep(item, index){
            this.item = item
            this.index = index
            this.detailModal = !this.detailModal
        },

        closeModal(){
            this.detailModal = false
        },

        likeResep(item, index){
            this.item = item
            this.index = index
            if (this.favorites.some(e => e.key === item.key)){
                const searchKey = this.favorites.find(e => e.key === item.key)
                this.$bvToast.toast('Resep Ini Berhasil Dihapus', {
                    title: searchKey.title.substring(5, searchKey.title.indexOf(',')),
                    variant: 'danger',
                    solid: true
                })
                this.deleteFromFavorites(item.key)
            }else{
                this.$bvToast.toast('Resep Ini Berhasil Disimpan', {
                    title: item.title.substring(5, item.title.indexOf(',')),
                    variant: 'warning',
                    solid: true
                })
                this.getFavorites(item)
            }
        },
    },
    mixins: [recipesTitle]
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
        border: 1px solid #e78200;
    }

</style>