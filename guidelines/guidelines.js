var version="30";

function titleToPathFrag (title) {
	return title.toLowerCase().replace(/[\s,]+/g, "-").replace(/[\(\)]/g, "");
}

function findHeading(el) {
	return el.querySelector('h1, h2, h3, h4, h5, h6');
}

function findFirstTextChild(el) {
	var children = el.childNodes;
	for (i = 0; i < children.length; i++) {
		if (children[i].nodeType == 3) {
			return children[i];
			break;
		}
	}
}

function textNoDescendant(el) {
	var textContent = "";
	el.childNodes.forEach(function(node) {
		if (node.nodeType == 3) textContent += node.textContent;
	})
	return textContent;
}

function sentenceCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function pathToName(path) {
	return sentenceCase(path.replace(/-/g, " "));
}

function addSummaryMarkers() {
	document.querySelectorAll('.summary').forEach(function(node){
		var parentHeader = findHeading(node.parentElement);
		var summaryHeader = node.querySelector('summary');
		var extraTitle = "";
		if (summaryHeader.textContent.toLowerCase() != "summary") extraTitle = " - " + summaryHeader.textContent;
		summaryHeader.innerHTML = "Plain language summary of <q>" + textNoDescendant(parentHeader) + "</q>" + extraTitle;
		
		var el = document.createElement("p");
		el.className = "summaryEnd";
		el.innerHTML = "End of summary for <q>" + textNoDescendant(parentHeader) + "</q>";
		node.appendChild(el);
	})
}

var statusLabels = {
	placeholder: 'We will be addressing this topic.',
	exploratory: 'We are exploring one or more possible directions for this content.',
	developing: 'We have high confidence in the direction and some confidence in the details.',
	refining: 'We have high confidence in the direction and moderate confidence in the details.',
	mature: 'We believe the content is ready to become a W3C Recommendation.',
}

function addStatusMarkers() {
	var statusKeys = Object.keys(statusLabels);
	statusKeys.forEach(function (status) {
		var headingSelector = '[data-status="' + status + '"] > .header-wrapper';
		var headings = document.querySelectorAll(headingSelector);
		headings.forEach(function (heading) {
			var statusMarker = document.createElement("span");
			statusMarker.classList.add("status-marker");
			statusMarker.innerHTML = sentenceCase(status);	
			heading.firstElementChild.insertAdjacentElement('beforeend', statusMarker);
		});

		var dfnSelector = '[data-status="' + status + '"] > dfn';
		var dfns = document.querySelectorAll(dfnSelector);
		dfns.forEach(function (dfn) {
			var statusMarker = document.createElement("span");
			statusMarker.classList.add("status-marker");
			statusMarker.innerHTML = sentenceCase(status);	
			dfn.insertAdjacentElement('beforeend', statusMarker);
		})
	});
}

var requirementTypeLabels = {
	foundational: 'Used to test the most basic level of accessibility.',
	supplemental: 'Used for higher levels of conformance.'
}

function addRequirementType() {
	var requirements = document.querySelectorAll(".requirement");
	requirements.forEach(function (requirement) {
		var requirementType = requirement.getAttribute('data-requirement-type');
		var preText = document.createElement("span");
		var heading = requirement.querySelector("h5");
		preText.classList.add("requirement-type");
		if(requirementType == 'assertion') {
			preText.innerHTML = "Assertion: ";
		} else if(requirementType == 'foundational' || requirementType == 'supplemental') {
			preText.innerHTML = sentenceCase(requirementType) + " requirement: ";
		} else {
			preText.innerHTML = "Requirement: ";
		}
		heading.insertAdjacentElement('afterbegin', preText);
	});
}

function removeDraftMethodLinks() {
	document.querySelectorAll('.method-link').forEach(function(node){
		uri = node.href;
		if (!uri.startsWith("https://www.w3.org")) {
			node.parentElement.innerHTML = node.textContent;	
		}
	});
}

function adjustNormativity() {
	document.querySelectorAll('body > section').forEach(function(node){
		if (node.classList.contains("informative")) {
			var normativeStatement = node.querySelector('p');
			normativeStatement.classList.add("informative-statement");
			normativeStatement.innerHTML = "<em>This section (with its subsections) provides advice only and does not specify guidelines, meaning it is <a href=\"#dfn-informative\" class=\"internalDFN\" data-link-type=\"dfn\">informative</a> or non-normative.</em>";
		} else if (node.id != "abstract" && node.id != "sotd" && !node.classList.contains("appendix")) {
			var el = document.createElement("p");
			el.className = "normative-statement";
			el.innerHTML = "<em>This section (with its subsections) provides requirements which must be followed to <a>conform</a> to the specification, meaning it is <a href=\"#dfn-normative\" class=\"internalDFN\" data-link-type=\"dfn\">normative</a>.</em>";
			var heading = findHeading(node);
			while (heading.parentNode !== node) {
				heading = heading.parentNode;
			}
			node.insertBefore(el, heading.nextSibling);
		}
	});
}

function adjustDfnData() {
	document.querySelectorAll('dfn').forEach(function(node){
		var curVal = node.getAttribute("data-lt");
		if (curVal == null) curVal = "";
		node.setAttribute("data-lt", node.textContent + (curVal == "" ? "" : "|") + curVal);
	});
}

function alternateFloats() {
	var order = "odd";
	document.querySelectorAll(".figure-float").forEach(function(node){
		if (order == "odd") {
			node.classList.add("figure-float-odd");
			order = "even";
		} else {
			node.classList.add("figure-float-even");
			order = "odd";
		}
	});
}

// somewhere along the chain image sizes are being added where I don't want them, doesn't happen locally
function removeImgSize() {
	document.querySelectorAll("img").forEach(function(node){
		if (node.getAttribute("src").endsWith(".svg")) {
			node.removeAttribute("width");
			node.removeAttribute("height");
		}
	});
}

function removeRequirementNum() {
	var tocEl = document.querySelector(".tocline > a[href=\"#guidelines\"]").parentNode.querySelector("ol");
	tocEl.querySelectorAll("ol ol ol ol bdi.secno").forEach(function(node){node.remove();});

	document.querySelectorAll(".requirement bdi.secno").forEach(function(node){node.remove();});
}

function outputJson() {
	params = new URLSearchParams(window.location.search);
	if (params.get("json") != null) {
		var result = new Object();
		result.guidelines = new Array();
		document.querySelectorAll(".guideline").forEach(function(glnode) {
			var gl = {
				id: titleToPathFrag(findFirstTextChild(findHeading(glnode)).textContent),
				name: findFirstTextChild(findHeading(glnode)).textContent,
				guideline: findFirstTextChild(glnode.querySelector("p")).textContent
			};
			gl.outcomes = new Array();
			glnode.querySelectorAll(".outcome").forEach(function(ocnode) {
				var ocid = titleToPathFrag(findFirstTextChild(findHeading(ocnode)).textContent);
				var oc = {
					id: ocid,
					name: findFirstTextChild(findHeading(ocnode)).textContent,
					outcome: findFirstTextChild(ocnode.querySelector("p")).textContent,
					methods: loadMethods(ocid)
				}
				gl.outcomes.push(oc);
			});
			result.guidelines.push(gl);
		});
		
	    var a = document.createElement("a");
	    var file = new Blob([JSON.stringify(result)], {type: "application/json"});
	    a.href = URL.createObjectURL(file);
	    a.download = "wcag3.json";
	    a.click();
	}
	
	function loadMethods(path) {
		var returnVal;
		var ocpath = "../outcomes/" + path + ".html";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				methodList = new Array();
				xml = xhttp.responseXML;
				xml.querySelectorAll(".method-link").forEach(function(node) {
					var methodid = node.href.match(/\/([a-z-]*)\/$/)[1]; 
					var method = {
						id: methodid,
						name: pathToName(methodid),
						method: node.textContent
					}
					methodList.push(method);
				});
				returnVal = methodList;
			}
		};
		xhttp.open("GET", ocpath, false);
		xhttp.overrideMimeType("text/xml");
		xhttp.send();

		return returnVal;
	}
}

function loadDoc(path) {
}

function moveStatusFilterToToc() {
	var button = document.querySelector('#status-filter');
	var button_parent = button.parentNode;
	var toc = document.querySelector('#toc');
	var toc_list = toc.querySelector('ol');
	toc.insertBefore(button_parent.removeChild(button), toc_list);
}

// scripts before Respec has run
function preRespec() {
	adjustDfnData();
	addSummaryMarkers();
}

// scripts after Respec has run
function postRespec() {
	adjustNormativity();
	removeDraftMethodLinks();
	removeRequirementNum();
	addRequirementType();
	addStatusMarkers();
	removeImgSize();
	outputJson();
}
