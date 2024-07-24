<script setup>
import NormalHeader from "@/components/templates/NormalHeader.vue";
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