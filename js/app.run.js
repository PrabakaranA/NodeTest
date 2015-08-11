angular.module('formTemplate')
.run(['$builder', function($builder) {
    return $builder.registerComponent('configurableTable', {
      group: 'Default',
      label: 'Table',
			options : [[
										{ "cellName": "a1b1", "celldata": "A1", "cellbackground": "#ae3131","celltextcolor": "#ffffff" },
										{ "cellName": "a1b2", "celldata": "A2", "cellbackground": "#ae3131","celltextcolor": "#ffffff" }
									],
								  [
											{ "cellName": "a2b1", "celldata": "A3", "cellbackground": "#ae3131","celltextcolor": "#ffffff" },
											{ "cellName": "a2b2", "celldata": "A4", "cellbackground": "#ae3131","celltextcolor": "#ffffff" }
									]],
      description: 'description_configureTable',
      templateUrl: "views/formComponents/configurable_table.html",
      popoverTemplateUrl: "views/popover/configurable_table.html"
    });

}]);
