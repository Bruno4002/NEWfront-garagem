<script setup>
import NormalHeader from "@/components/templates/normal/NormalHeader.vue";
</script>
<template>
    <div id="NormalSize">
        <header>
            <NormalHeader/>
        </header>
    
        <main>
            <RouterView/>
        </main>

    </div>
</template>