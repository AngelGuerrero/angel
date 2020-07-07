import TypeIt from 'typeit';

const pausetime = 1000

new TypeIt('.type__branding', {
  strings: ["Hi,<br>my name is<br>Ángel Guerrero"],
  speed: 90,
  breakLines: false,
  waitUntilVisible: true
}).go();

new TypeIt('.type__presentation', {
  delay: 100,
  strings: ["<strong>I develop in...</strong>\n",
            "\n" ],
  speed: 50
})
.pause(pausetime)
.type('<strong class="presentation_item">Vue</strong><br>')

.pause(pausetime)
.type('<strong class="presentation_item">C#</strong><br>')

.pause(pausetime)
.type('<strong class="presentation_item">SQL Server</strong><br>')

.pause(pausetime)
.type('<strong class="presentation_item">DevExtreme</strong><br>')

.pause(pausetime)
.type('<strong class="presentation_item">DevExpress</strong><br>')

.pause(pausetime)
.type('<strong class="presentation_item">Node</strong><br>')

.pause(pausetime)
.type('<strong class="presentation_item">JavaFX</strong><br>')
.pause(pausetime)
.delete(7)

.type('<strong class="presentation_item">PHP</strong>')
.pause(pausetime)
.delete(3)

.type('<strong class="presentation_item">SQL</strong>')
.pause(pausetime)
.delete(3)

.type('<strong class="presentation_item">PL/SQL</strong><br>')
.pause(pausetime)
.delete(6)

.type('<strong class="presentation_item">PL/pgSQL</strong>')
.pause(pausetime)
.delete(8)

.type('<strong class="presentation_item">Sass</strong><br>')
.pause(pausetime)

.type('<strong class="presentation_item">JavaScript</strong><br>')
.pause(pausetime)

.type('<strong class="presentation_item">Jekyll</strong><br>')
.pause(pausetime)
.delete(6)

.type('<strong class="presentation_item">Git</strong>')
.pause(pausetime)
.delete(3)

.type('<strong class="presentation_item">Express</strong><br>')
.pause(pausetime)

.type('<strong class="presentation_item">HTML5</strong><br>')
.pause(pausetime)
.go();
