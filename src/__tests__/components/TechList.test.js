import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {

    it('should render tech list', () => {
        useSelector.mockImplementation(cb => cb({
            techs: ['Node.js', 'ReactJS']
        }));

        const { getByTestId, getByText } = render(<TechList />);

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    });

    // beforeEach(() => {
    //     localStorage.clear();
    // });

    // it('should be able to add new tech', () => {
    //     const { getByText, getByTestId, getByLabelText } = render(<TechList />);
       
    //     fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' }});
    //     fireEvent.submit(getByTestId('tech-form'));
        
    //     expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    //     expect(getByLabelText('Tech')).toHaveValue('');
    // });

    // it('should store techs in storage', () => {

    //     let { getByTestId, getByLabelText, getByText } = render(<TechList />);
       
    //     fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' }});
    //     fireEvent.submit(getByTestId('tech-form'));
        
    //     cleanup();

    //     ({ getByTestId, getByLabelText, getByText } = render(<TechList />));

    //     expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']));
    //     expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));

    // })

    // it('should be able to add new tech', () => {
    //     const { getByText, getByTestId, debug } = render(<TechList />);
    //     debug();
    //     fireEvent.click(getByText('Adicionar'));
    //     debug();
    //     expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    // });

});