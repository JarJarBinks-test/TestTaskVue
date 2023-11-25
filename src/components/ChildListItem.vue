<script setup lang="ts">
  import { defineProps, defineEmits, ref, nextTick  } from 'vue';

  const maxCount = 10;
  const minCount = 4;

  const props = defineProps<{
    checked: boolean,
    itemIndex: number,
    count: number,
    color: string,
  }>();
  
  const emits = defineEmits([  
    'update:checked', 
    'update:count', 
    'update:color', 
  ]);

  const toggleItem = () => {
    emits('update:checked', !props.checked);
  };

  const updateCount = (count: number) => {
    if(count<minCount) {
      count = minCount;
    }
    if(count> maxCount) {
      count = maxCount;
    }

    emits('update:count', count);
  };

  const updateColor = (color: string) => {
    emits('update:color', color);
  };

  const editMode = ref(false);
  const txtCount = ref<HTMLInputElement>();
  const toggleEditMode = () => {
    editMode.value = !editMode.value;
    if(editMode.value) {
      nextTick(() => { 
        if(txtCount.value) { 
          txtCount.value.focus();
        }
      });
    }
  };
</script>

<template>
  <div class="child-list-item">
        <input :checked="props.checked"
               type="checkbox"
               @change="toggleItem" />
        <span class="item-count">Item {{ props.itemIndex + 1 }}</span>
        <span v-show="!editMode"
              @dblclick="toggleEditMode">{{ props.count }}</span>
        <input v-show="editMode"
               :value="props.count"
               type="number"
               min="0" 
               max="2"
               ref="txtCount"
               @input="updateCount(+($event.target as HTMLInputElement).value)"
               @blur="toggleEditMode">
        <input :value="props.color"
               type="color"
               @input="updateColor(($event.target as HTMLInputElement).value)">
  </div>
</template>

<style scoped>
  .child-list-item {
      display: flex;
      gap: 1rem;
  }

  .item-count {
    margin-left: 0;
    margin-right: auto;
  }

  input[type='color'] {
    width: 1.8rem;
  }

  input[type='number'] {
    width: 3.6rem;
  }
</style>
