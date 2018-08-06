sap.ui.define([
	"sap/ui/test/Opa5",
	"PlaceholderNamespace/ui5rrangements/Arrangement",
	"PlaceholderNamespace/ui5/test/integration/NavigationJourneyPhone",
	"PlaceholderNamespace/ui5otFoundJourneyPhone",
	"PlaceholderNamespace/ui5usyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "PlaceholderNamespace.ui5.view.",
		autoWait: true
	});
});
