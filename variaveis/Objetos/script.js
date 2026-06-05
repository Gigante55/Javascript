Object;
String;
Array;
Function;
Number;

Window;
history;
Document;
HTMLCollection;
NodeList;

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
