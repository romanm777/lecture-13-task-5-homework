var page = {
	'div': {
  	'@class': 'red',
  	'h3': 'welcome',
    'b': 'bold text'
  }
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

// gets all buttons on the page and find our
var buttons = document.getElementsByTagName("button");
for(var i = 0, count = buttons.length; i < count; ++i) {
	var button = buttons[i];

  // if proper button has found
	if(button.innerText === "Refresh") {
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

  // loops through all properties of 'page' object
 	for(var prop in page) {
  	// creates tag and tag text
		var newTag = document.createElement(prop);
  	var textNode = document.createTextNode(page[prop]);

  	// appends items to page div
  	newTag.appendChild(textNode);
  	pageDiv.appendChild(newTag);
	}
}
