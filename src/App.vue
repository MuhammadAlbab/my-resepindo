<template>
  <div id="app">
    <Navbar />
      <b-container>    
        <transition name="fade">  
          <router-view/>
        </transition>
      </b-container>
    <Footer />
  </div>
</template>


<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  async created(){
    if ('favorites' in localStorage){
      this.$store.state.favorites = JSON.parse(localStorage.getItem('favorites'))
    }
  }
}
</script>


<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out, transform 0.5s ease;
  }
  .fade-enter-active {
    transition-delay: 0.6s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .fade-enter-to, .fade-leave {
    opacity: 1;
    transform: translateX(0px);
  }
</style>
