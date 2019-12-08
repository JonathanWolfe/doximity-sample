import { mount } from '@vue/test-utils';

import Logo from '../../components/infinite-scroll.vue';
import testData from '../test-data';

describe('Infinite Scroll component', () => {
  test('is a Vue instance', () => {
    const fetchMoreStub = jest.fn();

    const wrapper = mount(Logo, {
      propsData: {
        apollo: {
          queries: {
            test: {
              fetchMore: fetchMoreStub,
            },
          },
        },
        queryName: 'test',
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Attempts to fetch data', () => {
    const fetchMoreStub = jest.fn();

    mount(Logo, {
      propsData: {
        apollo: {
          queries: {
            test: {
              fetchMore: fetchMoreStub,
            },
          },
        },
        queryName: 'test',
      },
    });

    expect(fetchMoreStub).toHaveBeenCalledTimes(1);
  });

  test('Loads returned data', async () => {
    const data = testData();

    let result = { test: { blogs: [], hasNextPage: true } };

    const previousResult = {
      test: {
        __typename: 'foo',
        blogs: result.test.blogs,
      },
    };
    const fetchMoreResult = {
      test: {
        pageInfo: { hasNextPage: false },
        blogs: data.blogs.slice(0, 1),
      },
    };

    const fetchMore = jest.fn(params => {
      result = params.updateQuery(previousResult, { fetchMoreResult });

      return result;
    });

    const wrapper = mount(Logo, {
      propsData: {
        apollo: {
          queries: {
            test: { fetchMore }, // eslint-disable-line no-use-before-define
          },
        },
        queryName: 'test',
      },
    });

    expect(result.test.blogs).toHaveLength(1);
    expect(result.test.pageInfo.hasNextPage).toEqual(false);
    expect(fetchMore).toHaveBeenCalledTimes(1);

    wrapper.setData({ atBottom: true });

    await wrapper.vm.$nextTick();

    expect(fetchMore).toHaveBeenCalledTimes(1);
  });

  test('bottom is visible', () => {
    const fetchMoreStub = jest.fn();

    const wrapper = mount(Logo, {
      propsData: {
        apollo: {
          scrollingElement: {
            scrollTop: 0,
            clientHeight: 12,
            scrollHeight: 12,
          },
          queries: {
            test: {
              fetchMore: fetchMoreStub,
            },
          },
        },
        queryName: 'test',
      },
    });

    expect(wrapper.vm.bottomVisible()).toBe(true);

    wrapper.setProps({
      scrollingElement: {
        scrollTop: 0,
        clientHeight: 12,
        scrollHeight: 24,
      },
    });

    expect(wrapper.vm.bottomVisible()).toBe(false);
  });
});
