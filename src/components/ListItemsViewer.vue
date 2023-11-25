<script setup lang="ts">
  import { defineProps, ref, watchEffect } from 'vue';
  import ListItemView from '@/classes/ListItemView';
  import ListItemViewer from '@/components/ListItemViewer.vue';

  const props = defineProps<{
    items: Array<ListItemView>
  }>();

  const items = ref(props.items);
  watchEffect(() => {
    items.value = props.items;
  });
</script>

<template>
  <div class="list-items-viewer">
    <ListItemViewer v-for="(item, index) in items"
                    :item="item"
                    :item-index="index"
                    :key="index"
                    class="list-item-view" />  
  </div>
</template>

<style scoped>
  .list-items-viewer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border: 1px solid gray;
    width: 300px;
  }
</style>
