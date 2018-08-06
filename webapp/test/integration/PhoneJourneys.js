jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"namespace/placeholder/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"namespace/placeholder/test/integration/pages/App",
	"namespace/placeholder/test/integration/pages/Browser",
	"namespace/placeholder/test/integration/pages/Master",
	"namespace/placeholder/test/integration/pages/Detail",
	"namespace/placeholder/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "namespace.placeholder.view."
	});

	sap.ui.require([
		"namespace/placeholder/test/integration/NavigationJourneyPhone",
		"namespace/placeholder/test/integration/NotFoundJourneyPhone",
		"namespace/placeholder/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});