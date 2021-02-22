// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  result = [];
  if (document.body.classList) {
    for (var j = 0; j < document.body.classList.length; j++) {
      if (document.body.classList.item(j) === className) {
        result.push(document.body);
      }
    }
  }
  var nodes = document.body.childNodes;
  var traverseNodes = function (nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var currentNode = nodes[i];
      if (currentNode.classList) {
        for (var j = 0; j < currentNode.classList.length; j++) {
          if (currentNode.classList.item(j) === className) {
            result.push(currentNode);
          }
        }
        if (currentNode.childNodes.length) {
          traverseNodes(currentNode.childNodes);
        }
      }
    }
  };
  traverseNodes(document.body.childNodes);
  return result;
};


