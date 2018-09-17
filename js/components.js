Vue.component('navigation-menu', {
  props: ['sitemap'],
  data: function () {
    return {
      links: [],
      header: {}
    }
  },
  template: `
  <div class="navigation">
    <ul>
      <li class="header">
        <a :href="header.url">{{ header.title }}</a>
      </li>
      <li class="children">
        <ul>
          <li v-for="link in links">
            <a :href="link.url">{{ link.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  `,
  created(){
    fetch(this.sitemap)
      .then(response => response.json())
      .then(json => {
        this.header = json.index;
        this.links = json.links;
      })
  }
});

Vue.component('body-text', {
  props: ['background'],
  template: `
    <div class="body-text" :class="'background-' + background">
      <div class="body-text-inner">
        <slot></slot>
      </div>
    </div>
  `
});

Vue.component('value-proposition', {
  template: `
    <div class="col-md-8">
      <slot></slot>
    </div>
  `
})

Vue.component('featured-links', {
  props: ['background'],
  template: `
    <div class="featured-links" :class="'background-' + background">
      <div class="featured-links-inner">
        <slot></slot>
      </div>
    </div>
  `
})

Vue.component('featured-link', {
  props: ['href'],
  template: `
    <center><a :href="href" class="button"><slot></slot></a></center>
  `
})

Vue.component('media-pane-youtube', {
  props: ['url', 'background'],
  template: `
    <div class="media-pane" :class="'background-' + background">
      <div class="media-pane-inner">
        <slot></slot>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" width="854" height="480" :src="url" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  `
})
