import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import {describe} from 'node:test';
import WrappedButton from './index';

describe('WrappedButton', () => {
    beforeEach(() => {
        // Render component
        render(<WrappedButton />);
    })

    test('Should display button', () => {
        // Debug info
        screen.debug();
        // For debugging using testing-playground,
        // screen exposes this convenient method
        // which logs a URL that can be opened in a browser
        screen.logTestingPlaygroundURL();

        const button = screen.getByText('Click me');

        expect(button as HTMLElement).toHaveTextContent()
    });

    test('Should call alert on click', async () => {
        const button = screen.getByText('Click me');

        jest.spyOn(window, 'alert').mockImplementationOnce(() => 'clicked')

        // fireEvent.click(button);

        await userEvent.click(button);

        expect(window.alert).toHaveBeenCalledTimes(1);
    })
})