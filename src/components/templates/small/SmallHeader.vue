<script setup>
import { ref } from 'vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const menuAberto = ref(false)
</script>
<template>
    <nav> 
        <Menu class="menu-hamburger" @click="menuAberto = !menuAberto" />
        <ul v-if="menuAberto">
        
    <router-link :to="{ name: 'home' }">Home</router-link> 
    <router-link to="/categorias">Categorias</router-link> 
    <router-link to="/acessorios">Acessórios</router-link> 
    <router-link to="/cores">Cores</router-link> 
    <router-link to="/marcas">Marcas</router-link> 
    <router-link to="/modelos">Modelos</router-link> 
    <router-link to="/veiculos">Veículos</router-link> 
    <div v-if="authStore.loggedIn">
    {{ authStore.user.email }}
  <router-link id="Logout"  to="/logout">Logout</router-link> 
  </div>
  <router-link v-else to="/login">Login</router-link>

        </ul>
    </nav>
</template>
<style scoped>
nav ul {
  display: flex;
  flex-direction: column;
  background-color: #333;
    padding: 1rem;
  gap: 1rem;
}
nav li {
  list-style: none;
}

.menu-hamburger {
    display: flex;
    background-color: #333;
    color: white;
    height: 5vh;
    align-items: center;
    padding: 1vh;
    cursor: pointer;
  }

  nav .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    right: 0;
    text-align: right;
    padding: 10px 16px;
  }
  
  nav .menu li {
    display: block;
    margin-top: 12px;
  }
  #Logout{
    color: red;
  }
</style>
