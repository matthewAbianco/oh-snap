import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import About from '../About';


describe('About component', () => {
    // renders about test
    it('renders About', () => {
        render(<About/>);
    })

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot()
    })

})

afterEach(cleanup);