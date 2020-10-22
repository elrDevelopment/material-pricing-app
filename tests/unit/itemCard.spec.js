
import { shallowMount } from '@vue/test-utils'
import ItemCard from '@/components/items/ItemCard.vue'

const itemData = {
  id: 44,
  itemName: 'Test card',
  itemDescription: 'a card for test',
  cost: 8888.88,
  itemCategory: 'test',
  imageSrcUrl: 'http://test.com/img.png'
}
describe('ItemCard.vue', () => {
  it('should render itemName when mounted', () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { itemInput: itemData }
    })
    expect(wrapper.find('h1').text()).toMatch(itemData.itemName)
  })
  it('should render a currency format to the cost data', () => {
    const amount = itemData.cost
    const wrapper = shallowMount(ItemCard, {
      propsData: { itemInput: itemData }
    })
    expect(wrapper.vm.formatPrice(amount)).toMatch('$8,888.88')
  })
})
