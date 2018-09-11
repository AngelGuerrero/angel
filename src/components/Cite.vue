<template>
  <div class="header__cite">
    <i>
      <blockquote class="cite" :title="quote.title" v-html="quote.content" :cite="quote.link"></blockquote>
    </i>
    <div class="cite__author"><strong v-html="quote.title"></strong></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cite',

  data() {
    return {
      quote: {},
      date: ''
    }
  },

  watch: {
    getQuote() {
      this.getQuote()
    }
  },

  mounted: function () {
    this.getQuote()
  },

  methods: {
    
    getQuote() {
      axios.get("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=")
           .then((response) => this.quote = response.data[0])
           .catch(err => console.err(err));
    },
  }
}
</script>