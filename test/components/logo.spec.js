import { mount } from '@vue/test-utils';
import Logo from '../../components/logo.vue';

describe('Logo Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
