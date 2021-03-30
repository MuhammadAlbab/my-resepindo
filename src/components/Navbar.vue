<template>
    <b-container>
        <b-navbar 
            toggleable="lg" 
            class="bg-transparent"
        >
            <img 
                :src="require ('@/assets/croppisau.png')" 
                alt="Logo" 
            >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto pa-0">
                    <router-link
                        v-for="(item,index) in link" 
                        :key="index"
                        :to="item.route" custom v-slot="{ navigate }"
                        class="text-center"
                    >
                        <span 
                            @click="navigate" 
                            @keypress.enter="navigate" 
                            role="link"
                        >
                            {{item.name}}
                        </span>
                    </router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            link: [
                {name: 'Home', route: '/'},
                {name: 'Resep', route: '/resep'},
                {name: 'Favorite', route: '/favorite'},
            ]
        }
    },
}
</script>

<style scoped>

    span {
        margin-left: 25px;
        font-size: 18px;
    }

    span:hover{
        cursor: pointer;
        color: #e78200;
    }
   
</style>
