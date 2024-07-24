<script setup>
import MediumHeader from "@/components/templates/NormalHeader.vue";
</script>
<template>
    <div id="MediumSize">
        <header>
            <MediumHeader/>
        </header>
        
        <main>
            <RouterView/>
        </main>

    </div>
</template>