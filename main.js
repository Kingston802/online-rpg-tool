function rolld(sides) {
  // where sides is a number from {4, 6, 8, 10, 12, 20}

  // calculate the roll
  let roll = Math.ceil(Math.random() * (sides));

  // change the icon 
  let el = document.getElementById(`${sides}`);
  console.log(el);
  el.setAttribute("src", `resources/${roll}.png`);

  console.log(roll);
}
