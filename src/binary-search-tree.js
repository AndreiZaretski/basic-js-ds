const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }  //Создаем класс 

class BinarySearchTree {

constructor() {
  this.rootTree = null;
}

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootTree
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootTree = addElem(this.rootTree, data);

    function addElem(node, data) {
      if(!node) {
        return new Node(data)
      }
      
      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addElem(node.left, data);
      } else {
        node.right = addElem(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchElem(this.rootTree, data);

    function searchElem(node, data) {
      if(!node) {
        return false;
      }

      if (node.data === data) {
        return true
      }

      return data < node.data ?
      searchElem(node.left, data) :
      searchElem(node.right, data);

      
    }
    
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // let node = this.rootTree;
    return searchElem(this.rootTree, data) || null;

    function searchElem(node, data) {
      if(!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ?
      searchElem(node.left, data) :
      searchElem(node.right, data);
    }
    
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left , data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootTree) {
      return;
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.rootTree) {
      return;
    }

    let node = this.rootTree;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};