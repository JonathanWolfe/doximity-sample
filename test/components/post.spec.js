import { mount } from '@vue/test-utils';

import Post from '../../components/post.vue';
import testData from '../test-data';

describe('Post Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Post);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Loads a post', () => {
    const data = testData();
    const wrapper = mount(Post, {
      propsData: { post: data.blogs[0] },
    });

    expect(wrapper.vm.post.liked).toBe(false);
  });

  test('toggles liked', async () => {
    const data = testData();
    const wrapper = mount(Post, {
      propsData: { post: data.blogs[0] },
      mocks: {
        $apollo: { mutate: () => Promise.resolve(true) },
      },
    });
    const checkbox = wrapper.find('#liked');

    checkbox.setChecked(true);

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.post.liked).toBe(true);
  });
});
