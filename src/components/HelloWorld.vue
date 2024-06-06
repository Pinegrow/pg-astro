<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>
<template>
  <div class="greetings">
    <h3 class="green">{{ msg }}</h3>
    <p>
      This is a simple template
      <a
        href="https://github.com/pinegrow/pg-vue"
        target="_blank"
        rel="noopener"
        ><BaseIcon
          style="
            display: inline-block;
            margin-left: 4px;
            margin-bottom: -4px;
            margin-right: 4px;
          "
          name="i-line-md-github-twotone"
      /></a>
      that pre-includes the
      <a
        href="https://www.npmjs.com/package/@pinegrow/astro-module"
        target="_blank"
        rel="noopener"
        >Pinegrow Astro Module</a
      >
      and other goodies for your drag & drop experience.
    </p>
    <h3>
      Visually design your components with Vue Designer -
      <a href="https://vuedesigner.com" target="_blank" rel="noopener"
        >Try Now</a
      >
    </h3>
    <hr />
  </div>
</template>
<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }
  @media (min-width: 1024px) {
  }
  h3 {
    font-size: 1.2rem;
  }
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
</style>
