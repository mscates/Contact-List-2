import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Header from './components/Header/Header'
import { MemoryRouter, Link, Button} from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })



describe('Header', () => {
  it('should show text', () => {
    const wrapper = shallow(<Header />)
    const h1 = wrapper.find('h1')
    const result = h1.text()
    expect(result).toBe('Basic Contact List')
  })
  it('should show add contact form when button is clicked', () => {
    const wrapper = shallow(<Header />).dive()
    const result = wrapper.find(Link)
    expect(result.props().to).toBe('/add')

  })
})