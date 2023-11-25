<script setup lang="ts">
  import { defineProps, computed, defineEmits } from 'vue';
  import ChildListItem from '@/components/ChildListItem.vue';
  import ListItemView from '@/classes/ListItemView';
  import ChildItemView from '@/classes/ChildItemView';

  const props = defineProps<{
    item: ListItemView,
    itemIndex: number,
  }>();

  const emits = defineEmits([  
    'remove-item', 
  ]);
  const checkedAllChildItems = computed(() => props.item.checkedAllChildItems);

  const toggleOpen = (item: ListItemView)=>{
    item.isOpen = !item.isOpen;
  };

  const toggleChildItems = (item: ListItemView)=>{
    const checkedAllChildItems = item.checkedAllChildItems;
    item.childItems.forEach(childItem=>{
      childItem.checked = !checkedAllChildItems;
    });
  };

  const removeItem = () => {
    emits('remove-item');
  };

  const addChildItem = (item: ListItemView) => {
    item.childItems.push(new ChildItemView());
  };
</script>

<template>
  <div class="list-item">
    <div class="list-item-manage">
      <button class="open-icon"
              title="Right click for remove"
              @click="toggleOpen(props.item)"
              @contextmenu.prevent="removeItem">
              <span :class="{ open: item.isOpen }">&rsaquo;</span>
      </button>
      <input :checked="checkedAllChildItems"
             :class="{'some-selected': props.item.checkedSomeChildItem && !props.item.checkedAllChildItems}"
             type="checkbox"
             @input="toggleChildItems(props.item)"  />
      <span @dblclick="addChildItem(props.item)">List {{ props.itemIndex + 1 }}</span>
    </div>
    <template v-if="item.isOpen">
      <ChildListItem v-for="(childItem, childIndex) in item.childItems"
                      v-model:checked="childItem.checked" 
                      :item-index="childIndex" 
                      v-model:count="childItem.count" 
                      v-model:color="childItem.color" 
                      :key="childIndex" />
    </template>
  </div>
</template>

<style scoped>
  .list-item {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      max-width: 300px;
  }
  
  .list-item .list-item-manage {
      display: flex;
      gap: 1rem;
  }

  .list-item .child-list-item {
    margin-left: 3.5rem;
  }


  .list-item .open-icon {
    border: none;
    background: transparent;
    font-size: 1.4rem;
    cursor: pointer;
    position: relative;
  }

  .list-item .open-icon span {
    position: absolute;
    top: 0;
  }

  .list-item .open-icon .open {
    transform: rotateZ(90deg);
  }

  .list-item .some-selected::before {
    content: '.';
    position: absolute;
    font-size: 2rem;
    margin-top: -1rem;
    margin-left: 0.125rem;
  }
</style>
