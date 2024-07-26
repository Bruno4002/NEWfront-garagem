<script setup>
import SmallHeader from "@/components/templates/small/SmallHeader.vue";
</script>
<template>
    <div id="SmallSize">
        <header>
            <SmallHeader/>
        </header>
    
        <main>
            <RouterView/>
        </main>
    </div>
</template>