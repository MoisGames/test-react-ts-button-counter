import { StoryFn, Meta } from '@storybook/react';
import Counter from '../components/Counter/Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
} as Meta;

const Template: StoryFn<{ quantity: number | string }> = (args) => <Counter {...args} />;


export const Default = Template.bind({});
Default.args = {
  quantity: 0,
};

export const WithValue = Template.bind({});
WithValue.args = {
  quantity: 50,
};

export const LargeValue = Template.bind({});
LargeValue.args = {
  quantity: 100,
};