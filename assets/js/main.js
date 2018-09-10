var vue = new Vue({
    el: "#app",
    data: {
        quote: {},
        date: ''
    },
    mounted: function() {
        this.getQuote();
        this.getDate();
    },
    methods: {
        getQuote: function() {
            axios.get("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=")
            .then((response) => {
                console.log(response.data[0]);
                this.quote = response.data[0];
            })
            .catch(err => console.err(err));
        },
        
        getDate: function() {
            this.date = new Date().getFullYear();
        },

        mytest: function() {
            console.log("gola");
        }
    }
});