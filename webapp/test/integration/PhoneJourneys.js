sap.ui.define([
	"sap/ui/test/Opa5",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/arrangements/Arrangement",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/NavigationJourneyPhone",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/NotFoundJourneyPhone",
	"PlaceholderNamespace/PlaceholderProjectName/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "PlaceholderNamespace.PlaceholderProjectName.view.",
		autoWait: true
	});
});
