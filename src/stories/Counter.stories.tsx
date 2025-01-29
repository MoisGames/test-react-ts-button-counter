import { StoryFn, Meta } from '@storybook/react';
import Counter from '../components/Counter/Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
} as Meta;

const Template: StoryFn<{ value: number }> = (args) => <Counter {...args} />;


export const Default = Template.bind({});
Default.args = {
  value: 0,
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 5,
};

export const LargeValue = Template.bind({});
LargeValue.args = {
  value: 100,
};