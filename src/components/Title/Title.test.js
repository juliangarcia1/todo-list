import React from 'react';
import { expect } from 'chai';
import { mount, shallow, Enzyme } from 'enzyme';
import { spy } from 'sinon';
import Title from './Title';

// spy(Title.prototype, 'componentDidMount');

describe('<Foo />', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Title/>); });

    it('Check text', () => {
        expect(wrapper.find('div.Title-img'));
    });
});