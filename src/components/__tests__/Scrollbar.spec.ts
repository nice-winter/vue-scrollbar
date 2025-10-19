import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ScrollBar from '../ScrollBar.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(ScrollBar, { props: { delay: 1 } })
    expect('Hello Vitest').toContain('Hello Vitest')
  })
})
