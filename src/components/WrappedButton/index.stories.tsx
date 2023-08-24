import type { Meta, StoryObj } from '@storybook/react';
import fetch from "node-fetch";

import WrappedButton from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'WrappedButton',
    component: WrappedButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    argTypes: {
        name: { control: 'text' },
    },
    args: {
        name: 'Default'
    }
} satisfies Meta<typeof WrappedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
