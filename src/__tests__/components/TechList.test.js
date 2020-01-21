import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () => {

    it('should be able to add new tech', () => {
        const { getByText, getByTestId, getByLabelText } = render(<TechList />);
       
        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' }});
        fireEvent.submit(getByTestId('tech-form'));
        
        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByLabelText('Tech')).toHaveValue('');
    });

    // it('should be able to add new tech', () => {
    //     const { getByText, getByTestId, debug } = render(<TechList />);
    //     debug();
    //     fireEvent.click(getByText('Adicionar'));
    //     debug();
    //     expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    // });

});