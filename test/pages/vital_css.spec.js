import { mount } from '@vue/test-utils';
import Page from '../../pages/vital_css.vue';

describe('Vital CSS Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Page);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
