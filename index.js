// Iteration 1: Names and Input

let hacker1 = "Fabien";
let hacker2 = "Romain";

console.log("The driver's name is" + hacker1);
console.log("The navigator's name is" + hacker2);

// Iteration 2: Conditionals

let driverName = hacker1.length;
let navigatorName = hacker2.length;

if (driverName > navigatorName) {
  console.log("The driver has the longest name, it has XX characters");
} else if (driverName < navigatorName) {
  console.log(
    "It seems that the navigator has the longest name, it has XX characters."
  );
} else {
  console.log("Wow, you both have equally long names, XX characters!");
}

// Iteration 3: Loops

let driverNameinCapital = "";

for (let i = 0; i < hacker1.length; i++) {
  driverNameinCapital += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameinCapital);

let navigatorNameReverse = " ";

for (let i = navigatorName - 1; i >= 0; i--) {
  navigatorNameReverse += hacker2[i];
}

console.log(navigatorNameReverse);

let longtext =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend erat in hendrerit fringilla. Pellentesque imperdiet hendrerit libero, at malesuada nisl sagittis sed. Duis varius sapien eget tellus condimentum, sit amet feugiat dolor faucibus. Nunc dignissim ex risus, vel lacinia elit semper id. Morbi urna tortor, viverra vitae ex at, lacinia maximus metus. Quisque fringilla suscipit arcu, vel congue ipsum luctus sit amet. Sed varius, erat nec tristique maximus, tortor orci cursus orci, aliquet rhoncus justo sapien ut urna. Etiam porttitor risus sed augue molestie condimentum. Etiam imperdiet, risus eget lacinia condimentum, augue leo consectetur nisl, id gravida neque ipsum ut dui. Ut molestie nisi ac ante gravida hendrerit vitae et quam. Donec odio enim, interdum nec felis id, fringilla mattis orci. Curabitur id nulla nunc. Praesent suscipit fringilla ante. Duis lobortis sit amet dolor nec faucibus. Pellentesque eu nulla sed est porttitor elementum. Vestibulum eu euismod metus. Nulla ut nulla vestibulum, sollicitudin metus in, faucibus diam. Nam dictum mauris vel nisi mollis, ut vehicula ligula eleifend. Praesent elementum lobortis nisi, eget tristique leo semper ac. Pellentesque gravida nisi ut odio luctus lobortis. Sed vel laoreet leo. Phasellus semper convallis ante, ac tristique urna congue vel. Aliquam quis ex vel neque porta maximus et at augue. Sed facilisis et orci id ultricies. Praesent accumsan commodo lorem et tristique. Mauris fringilla pulvinar justo vel sodales. Praesent porta ipsum et libero luctus pulvinar. Fusce massa nunc, tincidunt at massa vel, imperdiet venenatis dui. Pellentesque sit amet dolor in massa laoreet rutrum eu quis neque. Nullam semper tristique mi vitae egestas. Aenean molestie fermentum quam, a egestas quam rutrum tempor. Donec id felis laoreet, congue neque sit amet, aliquet ligula. Ut nec porta eros, vitae egestas arcu. Morbi bibendum aliquet ex a suscipit. Quisque id metus in tellus finibus accumsan sit amet eu eros. Sed quis diam congue, iaculis justo vel, viverra augue. In sed elementum elit. Praesent volutpat erat sed lorem egestas semper. Fusce eu lobortis dolor. In velit nibh, efficitur nec justo nec, placerat interdum libero.";

let numberOfWords = 1;
let numberOfEt = 0;

for (let i = 0; i < longtext.length; i++) {
  if (longtext[i] === " " || i === longtext.length) {
    numberOfWords++;
  }
  if ((longtext[i] + longtext[i + 1]).toLowerCase() === "et") {
    numberOfEt++;
  }
}

console.log(numberOfWords);
console.log(numberOfEt);
