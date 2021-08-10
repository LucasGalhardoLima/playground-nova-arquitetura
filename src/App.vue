<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" sm="4">
            <router-view class="text-center" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
