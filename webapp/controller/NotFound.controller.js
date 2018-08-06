sap.ui.define([
	"PlaceholderNamespace/PlaceholderProjectName/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("PlaceholderNamespace.PlaceholderProjectName.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
