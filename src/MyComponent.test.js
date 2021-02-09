import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './components/Header'
import { MemoryRouter } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })



describe('Header', () => {
  it('should show text', () => {
    const wrapper = shallow(<Header />)
    const text = wrapper.find('h1')
    expect(text.text()).toBe('Basic Contact List')
  })
  it('should show add contact form when button is clicked', () => {
    const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>)
    expect(wrapper.find('Link').prop('to')).toBe.equal('/add')
  })
})