var respecConfig = {
	// embed RDFa data in the output
	trace: true,
	doRDFa: '1.1',
	includePermalinks: true,
	permalinkEdge: true,
	permalinkHide: false,
	// specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
	specStatus: "ED",
	//crEnd:                "2012-04-30",
	//perEnd:               "2013-07-23",
	publishDate:          "2024-05-28",
	
	// the specifications short name, as in https://www.w3.org/TR/short-name/
	shortName: "wcag-3.0",
	
	
	// if you wish the publication date to be other than today, set this
	// publishDate:  "2009-08-06",
	copyrightStart: "2021",
	license: "document",
	
	// if there a publicly available Editors Draft, this is the link
	edDraftURI: "https://w3c.github.io/wcag3/guidelines/",
	
	// if this is a LCWD, uncomment and set the end of its review period
	// lcEnd: "2012-02-21",
	
	// editors, add as many as you like
	// only "name" is required
	editors:[ {
		name: "Rachael Bradley Montgomery",
		mailto: "rmontgomery@loc.gov",
		company: "Library of Congress",
		companyURI: "loc.gov/",
		w3cid: 90310
	}, {
		name: "Chuck Adams",
		mailto: "charles.adams@oracle.com",
		company: "Oracle",
		companyURI: "https://www.oracle.com/",
		w3cid: 104852
	}, {
		name: "Alastair Campbell",
		mailto: "acampbell@nomensa.com",
		company: "Nomensa",
		companyURI: "https://www.nomensa.com/",
		w3cid: 44689
	}, {
		name: "Kevin White",
		mailto: "kevin@w3.org",
		company: "W3C",
		companyURI: "https://www.w3.org/",
		w3cid: 71819
	}, {
		name: "Jeanne Spellman",
		mailto: "jspellman@spellmanconsulting.com",
		company: "TetraLogical",
		companyURI: "https://tetralogical.com/",
		w3cid: 42417
	}, {
		name: "Francis Storr",
		mailto: "francis.storr@intel.com",
		company: "Intel Corporation",
		companyURI: "https://tetralogical.com/",
		w3cid: 90883
	}],

	formerEditors: [{
		name: "Michael Cooper, Staff Contact, 2016-2023",
		company: "W3C",
		companyURI: "https://www.w3.org/",
		w3cid: 34017
	}, {
		name: "Shawn Lauriat, Editor, 2016-2023",
		company: "Google, Inc.",
		companyURI: "https://www.google.com/",
		w3cid: 90646
	}, {
		name: "Wilco Fiers, Project Manager, 2021-2023",
		company: "Deque Systems, Inc.",
		companyURI: "https://www.deque.com/",
		w3cid: 43334
	}],


	
	// authors, add as many as you like.
	// This is optional, uncomment if you have authors as well as editors.
	// only "name" is required. Same format as editors.
	
	//authors:  [
	//    { name: "Your Name", url: "http://example.org/",
	//      company: "Your Company", companyURI: "http://example.com/" },
	//],
	
	/*
	alternateFormats: [
	{ uri: 'aria-diff.html', label: "Diff from Previous Recommendation" } ,
	{ uri: 'aria.ps', label: "PostScript version" },
	{ uri: 'aria.pdf', label: "PDF version" }
	],
	 */
	
	// errata: 'https://www.w3.org/2010/02/rdfa/errata.html',
	
	group: "ag",
	github: "w3c/wcag3",
  
  // name (without the @w3.org) of the public mailing to which comments are due
  wgPublicList: "public-agwg-comments",

	maxTocLevel: 4,
	
	preProcess: [preRespec],
	postProcess: [postRespec],
	
	localBiblio: {
		"WCAG3-requirements": {
			"title": "Requirements for WCAG 3.0",
			"publisher": "World Wide Web Consortium",
			"date": "8 November 2024",
			"href": "https://www.w3.org/TR/wcag-3.0-requirements-20241108/"
		},

		"WCAG3-explainer": {
			"title": "Explainer for W3C Accessibility Guidelines (WCAG) 3.0",
			"publisher": "World Wide Web Consortium",
			"date": "8 November 2024",
			"href": "https://www.w3.org/TR/wcag-3.0-explainer-20241108/"
		},

		"508-criteria": {
			"title": "Section 508 Functional Performance Criteria",
			"publisher": "United States Access Board",
			"date": "8 December 2011",
			"href": "https://www.access-board.gov/ict/#chapter-3-functional-performance-criteria"
		},
		"en-301-549": {
			"title": "Accessibility requirements suitable for public procurement of ICT products and services in Europe",
			"publisher": "European Telecommunications Standards Institute",
			"date": "February 2014",
			"href": "https://www.etsi.org/deliver/etsi_tr/101500_101599/101550/01.01.01_60/tr_101550v010101p.pdf"
		}
	}
};
