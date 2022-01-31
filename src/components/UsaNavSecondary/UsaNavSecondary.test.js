import '@module/uswds/dist/css/uswds.min.css'
import { mount } from '@cypress/vue'
import UsaNavSecondary from './UsaNavSecondary.vue'

describe('UsaNavSecondary', () => {
  let testLinks

  beforeEach(() => {
    testLinks = [
      {
        to: '/first-link',
        text: 'First link',
      },
      {
        href: '/second-link',
        text: 'Second link',
      },
    ]
  })

  it('renders the component', () => {
    mount(UsaNavSecondary, {})

    cy.get('.usa-nav__secondary').should('exist')
    cy.get('.usa-nav__secondary-links').should('not.exist')
    cy.get('.usa-nav__secondary-item').should('not.exist')
    cy.get('.usa-nav__secondary-item a').should('not.exist')
  })

  it('displays list of links', () => {
    mount(UsaNavSecondary, {
      props: {
        items: testLinks,
      },
      slots: {
        search: () => 'Test search slot',
      },
    })

    cy.get('.usa-nav__secondary-links').should('exist')

    cy.get('.usa-nav__secondary-item').should('have.length', 2)
    cy.get('.usa-nav__secondary-item:nth-of-type(1) a')
      .as('firstLink')
      .should('have.attr', 'to')
      .and('contain', '/first-link')
    cy.get('@firstLink').should('contain', 'First link')

    cy.get('.usa-nav__secondary-item a').should('have.length', 2)
    cy.get('.usa-nav__secondary-item:nth-of-type(2) a')
      .as('secondLink')
      .should('have.attr', 'href')
      .and('contain', '/second-link')
    cy.get('@secondLink').should('contain', 'Second link')

    // Search slot is only rendered with the `extended` header variant.
    cy.get('.usa-nav__secondary').should('not.contain', 'Test search slot')
  })

  it('`search` slot is rendered if header is `extended` variant', () => {
    mount(UsaNavSecondary, {
      props: {
        items: testLinks,
      },
      slots: {
        search: () => 'Test search slot',
      },
      global: {
        provide: {
          isExtendedHeader: true,
        },
      },
    })

    cy.get('.usa-nav__secondary').should('contain', 'Test search slot')
  })
})