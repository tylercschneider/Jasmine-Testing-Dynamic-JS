/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loop through allFeeds and ensure that it 
        has defined data by checking that it is defined and that it
        has a length > 0.
         */

         it('each have a url defined', function() {
            //Variable testing allFeeds
            //Variable testing
            allFeeds.forEach(function(feed){
                
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

        /* Loop through allFeeds and check that each has a defined name with
        length > 0
         */
         it('each have a name defined', function() {

            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* Test that menu is intially hidden from viewer by looking for menu-hidden class
        by checking the generated html document.
         */
         it('is initially hidden', function() {

            expect($('body').hasClass('menu-hidden')).toBe(true);

         });


         /* Simulate user click of menu-icon using jQuery in order to check that menu
         displays with user response and hides with subsequent interaction.
          */
          it('toggles when menu icon is clicked', function() {

            var simulate = $('.menu-icon-link');

            simulate.click();
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            simulate.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

          });
          //variable: on click menu visibility changes
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* Use asynchronous testing functions in Jasmine to make sure there is at minimum of one
        entry in the feed after the feed has finished loading.
         */
         var entries = 0;

         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            }, 1);
        });

         it('contains a minimum of one entry element', function(done) {

            $('.feed .entry').each(function(entry){

                entries++;

            });

            expect(entries).toBeGreaterThan(0);
            done();

         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* Use asynchronous testing function to ensure that the feed changes 
        when a second feed is loaded. Storing html value of first entry element of both first and 
        second feed, ensure that they are not equal to pass test.
         */
	    var content0;
	    var content1;

        beforeEach(function(done) {
            loadFeed(0, function() {
                content0 = ($('.feed .entry:first').html());
            
	            loadFeed(1, function() {
	                content1 = ($('.feed .entry:first').html());
	                 done();
	            }, 1);
            }, 1);
        });

        it('loads new content', function(done) {
            expect(content0).not.toEqual(content1);
            done();
        });

    });

}());
