
**** READ ME ****

PROJECT
---
Feed Reader Testing - UDACITY FRONT END DEVELOPER NANODEGREE


DEVELOPER CONTACT
---
fictitious at gmail dot com


BUILD TOOLS
---
Sublime Text v3.0
Google Developer Tools 01/2018
Jasmine v2.1.2



TESTS
---
1. RSS Feeds
	are defined
	each have a url defined
	each have a name defined

2. The menu
	is initially hidden
	toggles when menu icon is clicked

3. Initial Entries
	contain a minimum of one entry element

4. New feed selection
	loads new content


GENERAL USAGE NOTES
---
Open webpage and see that All tests pass and are visible at the bottom of the webpage by opening index dot html in your browser.



CREATION OF TESTS
---
1. To test feeds needed to iterate through allFeeds to make sure each had a url and a name.

2. Simulated click of menu icon with Jquery commands to test menu functionality and initial state.

3. Use Jasmine asynchronous timers to make sure AJAX is loading at least one entry.

4. Use same Jasmine asynchronous timer to make sure AJAX is uploading new content when feed is switched. Just look at first entry data and compare it with new first entry data.


