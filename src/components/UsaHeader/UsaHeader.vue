<script setup>
import { computed, provide } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'basic',
    validator(variant) {
      const isValidVariant = ['basic', 'extended'].includes(variant)

      if (!isValidVariant) {
        console.warn(`'${variant}' is not a valid header variant`)
      }

      return isValidVariant
    },
  },
  megamenu: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: Object,
    default: () => {
      return {
        navContainer: [],
      }
    },
  },
})

const classes = computed(() => [
  {
    'usa-header--basic': props.variant === 'basic',
    'usa-header--extended': props.variant === 'extended',
    'usa-header--megamenu': props.megamenu,
  },
])

provide(
  'isExtendedHeader',
  computed(() => props.variant === 'extended')
)
provide(
  'isMegamenu',
  computed(() => props.megamenu)
)
</script>

<template>
  <header class="usa-header" :class="classes">
    <div
      v-if="variant === 'basic'"
      class="usa-nav-container"
      :class="customClasses?.navContainer"
    >
      <slot></slot>
    </div>

    <template v-else>
      <slot></slot>
    </template>
  </header>
</template>
