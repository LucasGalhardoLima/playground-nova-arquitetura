<script>
import { mapGetters } from 'vuex';

export default {
  name: 'paginaTesteViewPrincipal',
  computed: {
    ...mapGetters('teste', ['getMensagem']),
  },
};
</script>

<template>
  <article>
    <h1 class="display-1">{{ getMensagem }}</h1>
    <router-link to="/">Voltar</router-link>
  </article>
</template>
