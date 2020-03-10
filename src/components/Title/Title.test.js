import React from 'react';
import { expect } from 'chai';
import { mount, shallow, Enzyme } from 'enzyme';
import { spy } from 'sinon';
import Title from './Title';

// spy(Title.prototype, 'componentDidMount');

describe('<Title />', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Title title='Hello'/>) });

    it('Check has a Title-moto class', () => {
        expect(wrapper.find('div.Title-moto')).to.have.length(1);
    });

    it('Check pass title text in props', () => {
        expect(wrapper.instance().props.title).to.equal('Hello');
    });
    
    it('Header 1 contains the title passed in props', () => {
        expect(wrapper.find('h1').text()).to.equal('Hello');
    });
});