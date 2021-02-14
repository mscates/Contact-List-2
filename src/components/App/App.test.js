import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from '../App/App'
import Home from '../Home/Home'

Enzyme.configure({ adapter: new Adapter() })

describe('routes', () => {
  it('should show Home Component for / router', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>
    )
    expect(wrapper.find(Home)).toHaveLength(1)
  })
})