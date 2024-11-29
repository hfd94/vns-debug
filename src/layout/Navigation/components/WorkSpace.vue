<template>
  <v-sheet class="sheet" :border="true" height="32" width="100%"></v-sheet>
  <v-treeview
    class="tree-view-work"
    :items="items"
    :opened="initiallyOpen"
    item-value="title"
    activatable
    open-on-click
  >
    <template v-slot:prepend="{ item, isOpen }">
      <template v-if="!!item.children">
        <v-icon color="success" size="15">
          <IconFolder class="prefix-icon" />
        </v-icon>

        <v-icon size="18" v-if="!isOpen">
          <IconFolderOpen class="prefix-icon" />
        </v-icon>
      </template>

      <template v-else>
        <v-icon color="success" size="15">
          <IconRequest
            v-if="['get', 'post'].includes(item.type)"
            class="prefix-icon"
          />
          <IconConnect class="prefix-icon" v-else />
        </v-icon>
      </template>
    </template>

    <!-- <template v-slot:prepend="{ item, isOpen }"> </template> -->
  </v-treeview>
</template>
<script setup>
import { ref } from "vue";
import IconFolder from "@/components/icons/icon-folder.vue";
import IconFolderOpen from "@/components/icons/icon-folder-open.vue";
import IconRequest from "@/components/icons/icon-request.vue";
import IconConnect from "@/components/icons/icon-connect.vue";

const initiallyOpen = ref([""]);

const items = ref([
  {
    title: ".git",
    children: [
      {
        title: ".git1",
        type: "get",
      },
      {
        title: ".post",
        type: "post",
      },
      {
        title: ".socket",
        type: "websocket",
      },
    ],
  },
  {
    title: "node_modules",
    children: [],
  },
]);
</script>

<style lang="scss" scoped>
.tree-view-work {
  :deep(.v-list-item__prepend .v-list-item-action button) {
    display: none;
  }

  :deep(.v-list-group .v-list-item__content .v-list-item-title) {
    font-size: 12px;
    user-select: none;
  }

  :deep(.v-list-item__prepend .v-list-item__spacer) {
    width: 10px;
  }

  //   .prefix-icon {
  //     width: 18px;
  //     height: 18px;
  //     margin-right: 5px;
  //   }
}
.sheet {
  border-top: none;
  border-left: none;
  border-right: none;
}
</style>
