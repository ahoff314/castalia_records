import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists');
});

export default Router;

Router.map(function () {
  this.route('about');
  this.resource('posts', function () {
    this.resource('post', { path: ':post_slug' });
  });
  this.resource('admin', function () {
    this.route('create');
    this.route('edit', { path: ':edit_id' });
  });
  this.route('not-found', { path: '/*path' });
  this.route('contact');
  this.route('events');
});
