import TypeIt from "typeit";

const pausetime = 1000;

const class__wrapper = ".type__presentation";
const tag = "strong";
const classes = ["presentation_item"];

const wrapper = (data, newLine) => {
  return (
    `<${tag} class="${classes.toString()}">` +
    data +
    `</${tag}> ${newLine ? "<br>" : ""}`
  );
};

export const executeTypeIt = () => {
  new TypeIt(".type__branding", {
    strings: ["Hi,<br>my name is<br>Ángel Guerrero"],
    speed: 90,
    breakLines: false,
    waitUntilVisible: true,
  }).go();

  new TypeIt(".type__presentation", {
    delay: 500,
    strings: ["<strong>I develop in...</strong>\n", "\n"],
    speed: 50,
  })
    .pause(pausetime)
    .type(wrapper("Vue", true))

    .pause(pausetime)
    .type(wrapper("C#", true))

    .pause(pausetime)
    .type(wrapper("SQL Server", true))

    .pause(pausetime)
    .type(wrapper("DevExpress", true))

    .pause(pausetime)
    .type(wrapper("DevExtreme", true))

    .pause(pausetime)
    .type(wrapper("Node", true))

    .pause(pausetime)
    .type(wrapper("JavaFX"))
    .pause(pausetime)
    .delete(7)

    .type(wrapper("PHP"))
    .pause(pausetime)
    .delete(4)

    .type(wrapper("SQL"))
    .pause(pausetime)
    .delete(4)

    .type(wrapper("PL/SQL"))
    .pause(pausetime)
    .delete(7)

    .type(wrapper("SASS", true))
    .pause(pausetime)

    .type(wrapper("JavaScript", true))
    .pause(pausetime)

    .type(wrapper("Jekyll"))
    .pause(pausetime)
    .delete(7)

    .type(wrapper("Git"))
    .pause(pausetime)
    .delete(4)

    .type(wrapper("Express"))
    .pause(pausetime)

    .go();
};
