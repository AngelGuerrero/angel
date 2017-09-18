var vue = new Vue({
    el: '#app',

    data: {
      menuIcon: "kube-menu",
      menu: false
    },

    methods: {
      showMenu: function(event) {
        if (event.target.className == "kube-menu") {
          this.menuIcon = "close big"
        }
        else {
          this.menuIcon = "kube-menu"
        }
        console.log(event);
        console.log(event.target.className);
        this.menu = !this.menu
      }
    }
  });
