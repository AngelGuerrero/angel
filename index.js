import TypeIt from 'typeit';

new TypeIt('.type__branding', {
  strings: ["Bienvenido...", "Ángel Guerrero Blog"],
  speed: 200,
  breakLines: false,
  waitUntilVisible: true
}).go();

new TypeIt('.type__presentation', {
  strings: ["Desarrollador de software jr.\n",
            "\n",
            "\Realizo aplicaciones de escritorio y aplicaciones web, tengo experiencia \n",
            "en el uso de herramientas para el desarrollo Front-End y Back-End... \n\n\n"],
  speed: 50
})
.pause(2000)
.type('<strong>Node.js</strong>')
.pause(2000)
.delete(7)
.type('<strong>Vue.js</strong>')
.pause(2000)
.delete(6)
.type('<strong>Java</strong>')
.pause(2000)
.delete(4)
.type('<strong>JavaFX</strong>')
.pause(2000)
.delete(6)
.type('<strong>PHP</strong>')
.pause(2000)
.delete(3)
.type('<strong>SQL</strong>')
.pause(2000)
.delete(3)
.type('<strong>PL/SQL</strong>')
.pause(2000)
.delete(6)
.type('<strong>PL/pgSQL</strong>')
.pause(2000)
.delete(8)
.type('<strong>Sass</strong>')
.pause(2000)
.delete(4)
.type('<strong>JavaScript</strong>')
.pause(2000)
.delete(10)
.type('<strong>Jekyll</strong>')
.pause(2000)
.delete(6)
.type('<strong>Git</strong>')
.pause(2000)
.delete(3)
.type('<strong>Express.js</strong>')
.pause(2000)
.delete(10)
.type('<strong>HTML5</strong>')
.pause(2000)
.delete(5)
.go();
