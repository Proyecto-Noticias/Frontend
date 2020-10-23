import React from 'react';
import { shallow } from "enzyme";
import MainTitle from '../../components/MainTitle';


describe('Test of <MainTitle />', () => {
  
  
  const wrapper = shallow( <MainTitle /> )  
  
  test('should show the component correctly', () => {   
    expect ( wrapper ).toMatchSnapshot()
  })

  test('should contain className main__container-login', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')

    expect( className.includes('main__container-login')).toBe( true )
  })

  test('should contain className main__title', () => {
    const h1 = wrapper.find('h1')
    const className = h1.prop('className')

    expect( className.includes('main__title')).toBe( true )
  })

  test('should contain className main__title-description', () => {
    const p = wrapper.find('p')
    const className = p.prop('className')

    expect( className.includes('main__title-description')).toBe( true )
  })
  
})