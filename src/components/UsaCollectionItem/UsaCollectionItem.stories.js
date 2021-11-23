import UsaCollectionItem from './UsaCollectionItem.vue'

const defaultProps = {
  heading: 'Collection Item',
  headingTag: 'h2',
  href: '/test-page',
  to: '',
  routerComponentName: '',
  customClasses: {
    media: [],
    heading: [],
    link: [],
    description: [],
  },
}

const testMedia =
  '<img src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg" alt="A placeholder image">'

export default {
  component: UsaCollectionItem,
  title: 'Components/UsaCollectionItem',
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    headingTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
    },
    href: {
      control: { type: 'text' },
    },
    to: {
      control: { type: 'text' },
    },
    routerComponentName: {
      control: { type: 'text' },
    },
    mediaSlot: {
      control: { type: 'text' },
    },
    calendarSlot: {
      control: { type: 'text' },
    },
    headingSlot: {
      control: { type: 'text' },
    },
    descriptionSlot: {
      control: { type: 'text' },
    },
    defaultSlot: {
      control: { type: 'text' },
    },
    metaSlot: {
      control: { type: 'text' },
    },
  },
  args: {
    heading: defaultProps.heading,
    headingTag: defaultProps.headingTag,
    href: defaultProps.href,
    to: defaultProps.to,
    routerComponentName: defaultProps.routerComponentName,
    mediaSlot: '',
    calendarSlot: '',
    headingSlot: '',
    descriptionSlot: '',
    defaultSlot: `Today, the Administration announces the winners of the Gears of Government President's Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.`,
    metaSlot: '',
  },
  decorators: [
    () => ({ template: '<ul class="usa-collection"><story /></ul>' }),
  ],
}

const DefaultTemplate = (args, { argTypes }) => ({
  components: { UsaCollectionItem },
  props: Object.keys(argTypes),
  setup() {
    return { ...args }
  },
  template: `<UsaCollectionItem
    :heading="heading"
    :heading-tag="headingTag"
    :href="href"
    :to="to"
    :router-component-name="routerComponentName"
    :custom-classes="customClasses"
  >
    <template #media v-if="${!!args.mediaSlot}">${args.mediaSlot}</template>
    <template #calendar v-if="${!!args.calendarSlot}">${
    args.calendarSlot
  }</template>
    <template #heading v-if="${!!args.headingSlot}">${
    args.headingSlot
  }</template>
    <template #description v-if="${!!args.descriptionSlot}">${
    args.descriptionSlot
  }</template>
    <template #default v-if="${!!args.defaultSlot}">${
    args.defaultSlot
  }</template>
    <template #meta v-if="${!!args.metaSlot}">${args.metaSlot}</template>
  </UsaCollectionItem>`,
})

export const DefaultCollectionItem = DefaultTemplate.bind({})
DefaultCollectionItem.args = {
  ...defaultProps,
}
DefaultCollectionItem.storyName = 'Default'

export const MediaCollectionItem = DefaultTemplate.bind({})
MediaCollectionItem.args = {
  ...defaultProps,
  heading: 'Collection w/ Media',
  mediaSlot: testMedia,
}
MediaCollectionItem.storyName = 'Collection w/ Media'

export const CustomHeadingTagCollectionItem = DefaultTemplate.bind({})
CustomHeadingTagCollectionItem.args = {
  ...defaultProps,
  headingTag: 'h4',
  heading: 'Custom heading tag',
}
CustomHeadingTagCollectionItem.storyName = 'Custom Heading Tag'

export const HeadingSlotCollectionItem = DefaultTemplate.bind({})
HeadingSlotCollectionItem.args = {
  ...defaultProps,
  headingSlot: 'Custom header slot',
}
HeadingSlotCollectionItem.storyName = 'Header Slot'

export const DescriptionSlotCollectionItem = DefaultTemplate.bind({})
DescriptionSlotCollectionItem.args = {
  ...defaultProps,
  headingSlot: 'Custom header slot',
  descriptionSlot: 'Custom description slot',
}
DescriptionSlotCollectionItem.storyName = 'Description Slot'

export const CustomClassesCollectionItem = DefaultTemplate.bind({})
CustomClassesCollectionItem.args = {
  ...defaultProps,
  customClasses: {
    media: ['test-media-class'],
    heading: ['test-heading-class'],
    link: ['test-link-class'],
    description: ['test-description-class'],
  },
}
CustomClassesCollectionItem.storyName = 'Custom Classes'
