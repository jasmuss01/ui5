sap.ui.define([
	"PlaceholderNamespace/ui5troller"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("PlaceholderNamespace.ui5.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
