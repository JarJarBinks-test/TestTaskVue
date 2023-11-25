<script setup lang="ts">
  import { defineProps } from 'vue';
  import ChildItemView from '@/classes/ChildItemView';

  const props = defineProps<{
      items: Array<ChildItemView>,
  }>();

  const decreaseItem = (item: ChildItemView) => {
    item.count--;
  };

</script>

<template>
  <div class="child-list-items-view">
    <template v-for="(item, index) in props.items"
              :key="index">
      <div v-if="item.checked && item.count"
           class="child-list-items-container">
        <div v-for="countItem in item.count"
             :key="countItem"
             :style="{['background-color']: item.color }"
             class="child-list-item"
             @click="decreaseItem(item)"></div>
      </div>
    </template>    
  </div>
</template>

<style scoped>
  .child-list-items-view {
      display: flex;
      gap: 0.75rem;
      flex-direction: column;
      max-width: 300px;
  }

  .child-list-items-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.125rem;
  }

  .child-list-item {
    display: block;
    width: 0.75rem;
    height: 0.75rem;
  }
</style>
