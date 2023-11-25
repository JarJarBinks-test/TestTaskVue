<script setup lang="ts">
  import { ref } from 'vue'
  import ListItemsEditor from '@/components/ListItemsEditor.vue';
  import ListItemsViewer from '@/components/ListItemsViewer.vue';
  import ListItemView from '@/classes/ListItemView';
  import itemService from '@/services/itemsService';

  const items = ref(new Array<ListItemView>());

  const addItem = () => {
    items.value.push(new ListItemView());
  };

  const removeItem = (itemForRemove: ListItemView) => {
    items.value = items.value.filter(currentItem => currentItem !== itemForRemove);
  };

  // Emulate real loading data.
  const loadData = async () => {
    const resultItems = await itemService.loadItems();
    items.value = resultItems.map(item => new ListItemView(item));
  };

  loadData();
</script>

<template>  
  <div class="list-editor">
    <ListItemsEditor :items="items" 
                     @add-item="addItem" 
                     @remove-item="removeItem" />
    <ListItemsViewer :items="items" />   
  </div>
</template>

<style>
  .list-editor {
    display: flex;
    gap: 1rem;
  }
</style>
