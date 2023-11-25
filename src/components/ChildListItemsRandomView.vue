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
  <div class="child-list-items-random-view">
    <template v-for="(item, index) in props.items"
              :key="index">
      <template v-if="item.checked && item.count">
        <div v-for="countItem in item.count"
              :key="countItem"
              :style="{['background-color']: item.color, order: Math.floor(Math.random() * 10000) }"
              class="child-list-item"
              @click="decreaseItem(item)"></div>
      </template>
    </template>    
  </div>
</template>

<style scoped>
  .child-list-items-random-view {
      max-width: 300px;
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
