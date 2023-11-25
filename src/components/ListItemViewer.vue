<script setup lang="ts">
  import { defineProps, ref } from 'vue';
  import ChildListItemsView from '@/components/ChildListItemsView.vue';
  import ChildListItemsRandomView from '@/components/ChildListItemsRandomView.vue';
  import ListItemView from '@/classes/ListItemView';

  const props = defineProps<{
    item: ListItemView,
    itemIndex: number,
  }>();

  const mode = ref(true);
  const toggleDisplayMode = ()=> {
    mode.value = !mode.value;
  };
</script>

<template>
  <div class="list-item-view">
    <div class="list-item-view-header">
      <span>List {{ props.itemIndex + 1 }}</span>
      <button @click="toggleDisplayMode">
        <span v-if="!mode">Sort</span>
        <span v-if="mode">Random</span>
      </button>
    </div>    
    <ChildListItemsView v-if="mode && item.checkedSomeChildItem"
                        :items="item.childItems" />
    <ChildListItemsRandomView v-if="!mode && item.checkedSomeChildItem"
                              :items="item.childItems" />                        
  </div>
</template>

<style scoped>
  .list-item-view {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      max-width: 300px;
      padding: 0.25rem 0.25rem 0.5rem 0.25rem;
      border: 1px solid gray;
  }
  .list-item-view-header {
    display: flex;
    justify-content: space-between;
  }

  .list-item-view-header button {
    background-color: skyblue;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>
