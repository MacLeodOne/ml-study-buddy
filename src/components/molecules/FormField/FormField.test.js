/* eslint-disable prettier/prettier */
import React from "react";
import { screen, fireEvent} from '@testing-library/react';
import FormField from './FormField';
import {renderWithProviders} from 'heleprs/renderWithThemeProvider'



describe('Input With Button', () => {
    it ('Renders the component', () => { 
        renderWithProviders(<FormField label="name" name="name" id="name" />);
    });
});