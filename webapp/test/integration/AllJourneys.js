// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProjektSet in the list
// * All 3 ProjektSet have at least one zuWindpark

sap.ui.define([
	"sap/ui/test/Opa5",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/arrangements/Arrangement","PlaceholderNamespace/PlaceholderProjectName/test/integration/MasterJourney",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/NavigationJourney",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/NotFoundJourney",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/BusyJourney",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/FLPIntegrationJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "PlaceholderNamespace.PlaceholderProjectName.view.",
		autoWait: true
	});
});
