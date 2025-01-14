<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'
</script>
<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 1.5rem /* 24px */;
        padding-bottom: 1.5rem /* 24px */;
      "
    >
      <slot /><span style="margin-left: 0.5rem; /* 8px */">A Fresh Start!</span>
    </div>
  </div>
</template>
<style></style>
