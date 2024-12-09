var respecConfig = {
	// embed RDFa data in the output
	trace: true,
	doRDFa: '1.1',
	includePermalinks: true,
	permalinkEdge: true,
	permalinkHide: false,
	// specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
	specStatus: "DNOTE",
	noRecTrack: true,
	//crEnd:                "2012-04-30",
	//perEnd:               "2013-07-23",
	publishDate:          "2024-12-10",
	diffTool: "http://www.aptest.com/standards/htmldiff/htmldiff.pl",
	
	// the specifications short name, as in https://www.w3.org/TR/short-name/
	shortName: "wcag-3.0-requirements",
	
	
	// if you wish the publication date to be other than today, set this
	// publishDate:  "2009-08-06",
	copyrightStart: "2021",
	license: "w3c-software-doc",
	
	// if there a publicly available Editors Draft, this is the link
	edDraftURI: "https://w3c.github.io/wcag3/requirements/",
	
	// if this is a LCWD, uncomment and set the end of its review period
	// lcEnd: "2012-02-21",
	
	// editors, add as many as you like
	// only "name" is required
	editors:[ {
		name: "Alastair Campbell",
		mailto: "acampbell@nomensa.com",
		company: "Nomensa",
		companyURI: "https://www.nomensa.com/",
		w3cid: 44689
	},{
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

	maxTocLevel: 4,
	
	//localBiblio: biblio,
};
