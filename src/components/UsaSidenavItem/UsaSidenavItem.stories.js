import UsaSidenavItem from './UsaSidenavItem.vue'

const defaultProps = {
  item: {
    to: '/test-page-1',
    text: 'Test Page 1',
  },
  customClasses: UsaSidenavItem.props.customClasses.default(),
}

export default {
  component: UsaSidenavItem,
  title: 'Components/UsaSidenavItem',
  argTypes: {
    item: {
      control: { type: 'object' },
    },
    customClasses: {
      control: { type: 'object' },
    },
    default: {
      control: { type: 'text' },
    },
  },
  args: {
    item: defaultProps.item,
    customClasses: defaultProps.customClasses,
    default: '',
  },
  decorators: [() => ({ template: '<ul class="usa-sidenav"><story /></ul>' })],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaSidenavItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaSidenavItem :item="item" :custom-classes="customClasses"><template v-if="${!!args.default}" #default="{ item }">${
    args.default
  }</template></UsaSidenavItem>`,
})

export const DefaultSidenavItem = DefaultTemplate.bind({})
DefaultSidenavItem.args = {
  ...defaultProps,
}
DefaultSidenavItem.storyName = 'Default'

export const CustomClassesSidenavItem = DefaultTemplate.bind({})
CustomClassesSidenavItem.args = {
  ...defaultProps,
  item: {
    to: '/test-page-1',
    text: 'Test Page 1',
    children: [
      {
        to: '/test-page-1-1',
        text: 'Test Page 1.1',
      },
      {
        to: '/test-page-1-2',
        text: 'Test Page 1.2',
      },
      {
        to: '/test-page-1-3',
        text: 'Test Page 1.3',
      },
    ],
  },
  customClasses: {
    item: ['test-item-class'],
    link: ['test-link-class'],
    sublist: ['test-sublist-class'],
  },
}
CustomClassesSidenavItem.storyName = 'Custom Classes'

export const SublistSidenavItem = DefaultTemplate.bind({})
SublistSidenavItem.args = {
  ...defaultProps,
  item: {
    to: '/parent-page',
    text: 'Parent page',
    children: [
      {
        to: '/parent-page/sublist',
        text: 'Sublist',
      },
    ],
  },
}
SublistSidenavItem.storyName = 'With Sublist'

export const ScopedSlotSidenavItem = DefaultTemplate.bind({})
ScopedSlotSidenavItem.args = {
  ...defaultProps,
  item: {
    to: '/parent-page',
    text: 'Parent page',
  },
  default: `<strong>{{ item.to }} &rarr;</strong>`,
}
ScopedSlotSidenavItem.storyName = 'Scoped Slot'
