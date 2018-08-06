jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProjektSet in the list
// * All 3 ProjektSet have at least one zuWindpark

sap.ui.require([
	"sap/ui/test/Opa5",
	"namespace/placeholder/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"namespace/placeholder/test/integration/pages/App",
	"namespace/placeholder/test/integration/pages/Browser",
	"namespace/placeholder/test/integration/pages/Master",
	"namespace/placeholder/test/integration/pages/Detail",
	"namespace/placeholder/test/integration/pages/Create",
	"namespace/placeholder/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "namespace.placeholder.view."
	});

	sap.ui.require([
		"namespace/placeholder/test/integration/MasterJourney",
		"namespace/placeholder/test/integration/NavigationJourney",
		"namespace/placeholder/test/integration/NotFoundJourney",
		"namespace/placeholder/test/integration/BusyJourney",
		"namespace/placeholder/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});