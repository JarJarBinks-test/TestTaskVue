import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ListItem from '../ListItem.vue'
import ListItemView from '@/classes/ListItemView';

describe('ListItem', () => {
  it('renders properly', () => {
    const wrapper = mount(ListItem, { props: { 
      item: new ListItemView(),
      itemIndex: 1, } });

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
