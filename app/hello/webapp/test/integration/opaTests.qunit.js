sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hello/test/integration/FirstJourney',
		'hello/test/integration/pages/MyEntityList',
		'hello/test/integration/pages/MyEntityObjectPage'
    ],
    function(JourneyRunner, opaJourney, MyEntityList, MyEntityObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hello') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMyEntityList: MyEntityList,
					onTheMyEntityObjectPage: MyEntityObjectPage
                }
            },
            opaJourney.run
        );
    }
);