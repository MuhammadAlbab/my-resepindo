<template>
    <div class="container">
        <b-navbar toggleable="lg" class="bg-transparent">
            <img 
                :src="require ('@/assets/croppisau.png')" 
                alt="Logo" 
            >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <router-link to="/" custom v-slot="{ navigate }">
                        <span @click="navigate" @keypress.enter="navigate" role="link">
                            Home
                        </span>
                    </router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/resep" custom v-slot="{ navigate }">
                        <span @click="navigate" @keypress.enter="navigate" role="link">
                            Resep
                        </span>
                    </router-link>
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>

    span {
        margin-left: 5px;
    }
   
</style>
