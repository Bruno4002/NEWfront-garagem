<script setup>
import MediumHeader from "@/components/templates/medium/MediumHeader.vue";
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