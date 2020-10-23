import React from 'react';
import { shallow } from "enzyme";
import { NotFound } from '../../components/NotFound';


describe('Test of <NotFound />', () => {  
  
  const wrapper = shallow( <NotFound /> )  
  
  test('should show the component correctly', () => {   
    expect ( wrapper ).toMatchSnapshot()
  })

  test('should contain className notfound__container', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')

    expect( className.includes('notfound__container')).toBe( true )
  })

  it("redirects to home", () => {  
    expect(wrapper.find("Link").prop("to")).toEqual('/')
  })

  test('should have a title', () => {    
    const h1 = wrapper.find('h1')
    expect( h1.text()).toBe("We don't find what you are looking for")
  })
  
})
