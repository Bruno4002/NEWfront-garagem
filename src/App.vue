<script setup>
import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

</script>

<template>
  <header>
  
    <div class="Itens">
      <router-link :to="{ name: 'home' }">Home</router-link> 
      <router-link to="/categorias">Categorias</router-link> 
      <router-link to="/acessorios">Acessórios</router-link> 
      <router-link to="/cores">Cores</router-link> 
      <router-link to="/marcas">Marcas</router-link> 
      <router-link to="/modelos">Modelos</router-link> 
      <router-link to="/veiculos">Veículos</router-link> 
    </div>
    <div v-if="authStore.loggedIn">
      {{ authStore.user.email }}
    <router-link id="Logout"  to="/logout">Logout</router-link> 
    </div>
    <router-link v-else to="/login">Login</router-link>
    
  </header>
  

  <main>
    <RouterView />
  </main>

 
</template>
 

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 10%;
  background-color: black;
  color: white;
  font-size: medium;
}
.Itens {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 10px;
  background-color: black;
 
}

main {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
  padding: 25vh;
  height: 100% ;
  color: aliceblue;
 
}
#Logout {
  color: rgb(255, 0, 0);
}

</style>
