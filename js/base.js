var page = {
	'div': {
  	'@class': 'red',
  	'h3': 'welcome',
    'b': 'bold text'
  },
  'b': 'one more bold text',
  'b': {
  	'@class': 'red',
    '@value': 'one more bold text'
  },
  'h3': 'hello, this is a title',
  'section': {
  	'@class': 'red',
    'i': 'text',
  	'div': {
    	 '@class': 'blue',
       'i': 'test'
    }
  }
};

"use strict"

// gets all buttons on the page and find our
var buttons = document.getElementsByTagName("button");
for(var i = 0, count = buttons.length; i < count; ++i) {
	var button = buttons[i];

  // if proper button has found
	if(button.innerText === "Build") {
  	// sets the onclick handler
  	button.onclick = build;
  }

  break;
}

function build() {
  // gets our page div
  var pageDiv = document.getElementById("page");

  // removes dots
  while(pageDiv.firstChild) {
    pageDiv.removeChild(pageDiv.firstChild);
  }

	// recursion tree building
	buildTree(page, pageDiv);
}

function buildTree(parentObject, parentNode) {
	// checks if parentObject is substring
	if("string" == typeof parentObject) {
		createValue(parentObject, parentNode);
		return;
	}

	// loops through all properties of 'parentObject'
 	for(var prop in parentObject) {
		var variant = -1;
		var atSignIndex = prop.indexOf("@");

		// creates tag value
		if(0 == atSignIndex && prop.substring(atSignIndex + 1) == "value") {
			createValue(parentObject[prop], parentNode);
		}
		// creates attribute
		else if(0 == atSignIndex) {
			createAttribute(prop, parentObject[prop], parentNode);
		}
		// creates tag
		else {
			createTag(prop, parentObject[prop], parentNode);
		}
	}
}

function createAttribute(attr, attrValue, parentNode) {
	// cuts off "@"
	var temp = attr;
	var index = temp.indexOf("@");
	if(-1 != index) {
		temp = temp.substring(index + 1);
	}

	var attr = document.createAttribute(temp);      // Creates an attribute
	attr.value = attrValue;                       	// Set the value of the attribute
	parentNode.setAttributeNode(attr);
}

function createValue(tagValue, parentNode) {
	var text = document.createTextNode(tagValue);       // Create a text node
	parentNode.appendChild(text);
}

function createTag(prop, propValue, parentNode) {
	// creates tag and tag text
	var newTag = document.createElement(prop);
	parentNode.appendChild(newTag);

	// recursion
	buildTree(propValue, newTag);
}
