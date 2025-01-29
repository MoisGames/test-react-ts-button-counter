import { StoryFn, Meta } from '@storybook/react';
import Button from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Button clicked!'),
  isLoading: false,
};