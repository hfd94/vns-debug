<template>
  <v-system-bar style="-webkit-app-region: drag; padding-right: 0" height="28">
    <div style="-webkit-app-region: no-drag" class="d-flex">
      <v-btn variant="text" size="small" rounded="0" :ripple="false">
        <v-icon>mdi-minus-thick</v-icon>
      </v-btn>
      <v-btn variant="text" size="small" :ripple="false">
        <v-icon>mdi-window-maximize</v-icon>
      </v-btn>
      <v-btn variant="text" size="small" color="error" :ripple="false">
        <v-icon>mdi-close-box</v-icon>
      </v-btn>
    </div>
    <!-- 顶部控制栏 -->
  </v-system-bar>
</template>
