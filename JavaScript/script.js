console.log("Hello World");
console.log(2525);

// document.write("Good Morning!<br>");
// document.write('"Good Morning!"');
// document.write("<li>'Good Morning'</li>");
// document.write("<h1>Good Morning</h1>");

const show = () => {
  document.getElementById("myheading").innerHTML = "<h1>hello everyone</h1>";
  //   alert("Click ok to continue");
  window.confirm("Press yes or No");
  //   print();
  let name = prompt("Enter your name");
  document.write(name);

  let num = Number(prompt("Enter a number"));
  document.write("<br>", num + 5);
};
