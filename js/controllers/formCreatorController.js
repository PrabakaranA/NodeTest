formTemplate.controller('FormCreatorController', [
    '$scope', '$builder', '$validator','toastr', function($scope, $builder, $validator, toastr) {

      textbox = $builder.addFormObject('default', {

        id: 'configurableTable',
        component: 'configurableTable',
        label: 'Table',
        description: 'Your name',
        placeholder: '',
        required: true,
        editable: false


      });

      $scope.form = $builder.forms['default'];
      $scope.input = [];
      $scope.formName;
      $scope.formList = [];
      $scope.saveForm = function(form){
    	  $scope.pushData = true;
    	  var length = $scope.formList.length;
		  for(var i = 0; i<length;i++){
			  if($scope.formList[i].formName == $scope.formName)
			  $scope.pushData = false;
		  }
		  if($scope.pushData){
	    	  $scope.formList.push({
	    		  	formName:$scope.formName,
	    		  	form : angular.copy(form)
	    		  });
	    	  var length = form.length;
	    	  for(var i=0; i<length;i++)
	    		  $builder.removeFormObject('default', 0);
	    	  $scope.formName = '';
		  }else{
			  toastr.error("Form Already Exit");
		  }
      };

      $scope.cancelForm = function(form){
    		  var length = form.length;
        	  for(var i=0; i<length;i++)
        		  $builder.removeFormObject('default', 0);
        	  $scope.formName = '';
      };

      $scope.updateForm = function(form){
    	  if($scope.formName){
    		  var length = $scope.formList.length;
    		  for(var i = 0; i<length;i++){
    			  if($scope.formList[i].formName == $scope.formName)
    			  $scope.formList[i].form = angular.copy(form);
    		  }
    		  var length = form.length;
        	  for(var i=0; i<length;i++)
        		  $builder.removeFormObject('default', 0);
    	  }else{
    		  toastr.error("form name does not exist");
    	  }
    	  $scope.formName = '';
      };

      $scope.showForm = function(obj){
    	  var list = obj.form;
    	  $scope.formName = obj.formName;
    	  var length = $scope.form.length;
    	  if(length > 0){
    		 for(var i=0; i<length;i++)
    			  $builder.removeFormObject('default', 0);
    	  }
    	  var length = list.length;
    	  for(var i=0; i<length;i++)
    	  $builder.addFormObject('default',list[i]);
      }

      return $scope.submit = function() {
        return $validator.validate($scope, 'default').success(function() {
          return console.log('success');
        }).error(function() {
          return console.log('error');
        });
      };
    }
  ]);
