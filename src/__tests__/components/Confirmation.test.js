import React from 'react';
import { shallow } from "enzyme";
import  Confirmation  from "../../components/Confirmation";



describe('Test of <Confirmation />', () => {
  const wrapper = shallow( <Confirmation /> )
  
  test('should show the component correctly', () => {   
    expect ( wrapper ).toMatchSnapshot()
  })
  
  test('should have a title', () => {
    
    const p = wrapper.find('p')
    expect( p.text()).toBe('Your account has been activated') 

  })

  test('should have a link to home', () => {
    
    const Link = wrapper.find('Link')
    expect( Link.text()).toBe('Go to login') 

  })
  

})
