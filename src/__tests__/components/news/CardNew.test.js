import React from 'react';
import { shallow } from "enzyme";
import CardNew from '../../../components/news/CardNew';


describe('Test of <CardNew />', () => {
  const imageUrl = 'https://localhost/imgtest.jpg';
  const title = ' Test Title ';
  const _id = '123abc';
  
  const wrapper = shallow( <CardNew 
    imageUrl={imageUrl}
    title={title}
    _id={_id}
    /> )  
  
  test('should show the component correctly', () => {   
    expect ( wrapper ).toMatchSnapshot()
  })
  
  test('should show a title', () => {   

    const h2 = wrapper.find('h2')
    expect ( h2.text()).toBe(title)
  }) 

  test('should show a title', () => {   

    const h2 = wrapper.find('h2')
    expect ( h2.text()).toBe(title)
  }) 
  
  it("renders an image", () => {  
    expect(wrapper.find("img").at(0).prop("src")).toEqual(imageUrl)
  })

  it("redirects to news/:id", () => {  
    expect(wrapper.find("Link").prop("to")).toEqual(`/new/${_id}`)
  })
})