import { ref, readonly } from 'vue'

export const isMobileMenuOpen = /*#__PURE__*/ ref(false)
export const menuId = /*#__PURE__*/ ref('__vuswds-id-global-mobile-header-menu')

export function useMobileMenu(emit) {
  const mobileMenuOpenClass = 'usa-js-mobile-nav--active'

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false

    if (emit) {
      emit('mobileMenuOpen', false)
    }

    document.body.classList.remove(mobileMenuOpenClass)
    document
      .querySelectorAll('body > :not(.usa-nav)')
      .forEach(element => element.removeAttribute('aria-hidden', true))
  }

  const openMobileMenu = () => {
    isMobileMenuOpen.value = true

    if (emit) {
      emit('mobileMenuOpen', true)
    }

    document.body.classList.add(mobileMenuOpenClass)
    document
      .querySelectorAll('body > :not(.usa-nav)')
      .forEach(element => element.setAttribute('aria-hidden', true))
  }

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen.value) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }

  return {
    isMobileMenuOpen: readonly(isMobileMenuOpen),
    mobileMenuId: readonly(menuId),
    closeMobileMenu: closeMobileMenu,
    openMobileMenu: openMobileMenu,
    toggleMobileMenu: toggleMobileMenu,
  }
}
