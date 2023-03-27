// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <ArticleCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import ArticleCard from './ArticleCard'

export const generated = () => {
  return <ArticleCard />
}

export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
}
