// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AuthPortal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AuthPortal from './AuthPortal'

export const generated = () => {
  return <AuthPortal />
}

export default {
  title: 'Components/AuthPortal',
  component: AuthPortal,
}
