var version="30";

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
		var selector = '[data-status="' + status + '"] > .header-wrapper';
		var headings = document.querySelectorAll(selector);
		headings.forEach(function (heading) {
      var statusMarker = document.createElement("span");
      statusMarker.classList.add("status-marker");
      statusMarker.innerHTML = sentenceCase(status);
      heading.firstElementChild.insertAdjacentElement('beforeend', statusMarker);
		})
	});
}

function sentenceCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// scripts after Respec has run
function postRespec() {
	addStatusMarkers();
}