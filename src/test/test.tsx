import * as React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('<Counter />', () => {
	it('성공적으로 렌더링되어야 합니다.', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.length).toBe(1);
	});
});
