<script>
import { mapGetters } from 'vuex';

export default {
  name: 'inicio',
  computed: {
    ...mapGetters('teste', ['getMensagem']),
  },
};
</script>

<template>
  <div class="hello">
    <h1 class="display-1">{{ getMensagem }}</h1>
    <router-link to="/inicio">Próximo</router-link>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
