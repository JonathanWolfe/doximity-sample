import { shallowMount } from '@vue/test-utils';

import Page from '../../pages/index.vue';

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Page, {
      stubs: ['Post', 'infinite-scroll'],
      mocks: {
        $apollo: {},
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
