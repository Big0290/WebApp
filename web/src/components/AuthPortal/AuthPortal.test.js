import { render } from '@redwoodjs/testing/web'

import AuthPortal from './AuthPortal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthPortal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthPortal />)
    }).not.toThrow()
  })
})
