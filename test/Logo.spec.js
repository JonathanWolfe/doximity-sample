import { mount } from '@vue/test-utils';
import logo from '../components/logo.vue';

describe('logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
