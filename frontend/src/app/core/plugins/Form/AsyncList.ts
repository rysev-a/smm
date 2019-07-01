import { observable } from 'mobx';
import { assoc } from 'ramda';

interface ServerListApi {
  list: {
    get: any;
    delete: any;
  };
}

class AsyncList {
  api: ServerListApi;
  @observable processing = false;
  @observable loaded = false;
  @observable items = [];
  @observable pagination = {
    page: 1,
    pages: 10,
  };

  @observable filters = [];
  @observable sorting = {};

  constructor(api) {
    this.api = api;
  }

  updateFilters = filters => {
    this.filters = filters;
  };

  updateSorting = sorting => {
    this.sorting = sorting;
  };

  reset = () => {
    this.loaded = false;
    this.processing = false;
    this.items = [];
    this.pagination = {
      page: 1,
      pages: 0,
    };
  };

  load = () => {
    this.api.list
      .get({
        pagination: this.pagination,
        filters: this.filters,
        sorting: this.sorting,
      })
      .then(({ data: { items, pages } }) => {
        this.loaded = true;
        this.processing = false;
        this.items = items;
        this.pagination = assoc('pages', pages, this.pagination);
      })
      .catch(() => {
        console.warn('load fail');
        this.processing = false;
        this.loaded = false;
      });
  };

  remove = id => {
    this.api.list.delete(id).then(this.load);
  };

  pageSet = page => {
    this.pagination = assoc('page', page, this.pagination);
    this.load();
  };
}

export default AsyncList;
