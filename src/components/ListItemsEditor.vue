<script setup lang="ts">
  import { defineProps, defineEmits, ref, watchEffect } from 'vue';
  import ListItem from '@/components/ListItem.vue';
  import ListItemView from '@/classes/ListItemView';

  const props = defineProps<{
    items: Array<ListItemView>
  }>();

  const emits = defineEmits([
    'add-item', 
    'remove-item',
  ]);

  const items = ref(props.items);
  watchEffect(() => {
    items.value = props.items;
  });

  const addItem = () => {
    emits('add-item');
  };

  const removeItem = (item: ListItemView) => {
    if(confirm('Are you sure?')) {
      emits('remove-item', item);
    }
  };
</script>

<template>
  <div class="list-items">
    <ListItem v-for="(item, index) in items"
              :item="item"
              :item-index="index"
              :key="index"
              class="list-item"
              @remove-item="removeItem(item)" />  
    <button @click="addItem">Add</button>
  </div>
</template>

<style scoped>
  .list-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border: 1px solid gray;
  }
</style>
