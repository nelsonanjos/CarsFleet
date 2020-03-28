const renderCreateTimeline = () => {
	let getMaintenance = null;
    const handleSubmit = () => {

         $.ajax({
             method: 'POST',
             url: 'ControllerFactory',
             data: {
            	 action: ('timeline.CreateTimeline'),
            	 date: $('#timeline-date').val(),
            	 vehicle: $('#timeline-vehicle').val(),
            	 driver: $('#timeline-driver').val(),
                 startKm: $('#timeline-start-km').val(),
                 finishKm: $('#timeline-finish-km').val(),
                 fail: $('#timeline-fail').val(),
                 maintenance: getMaintenance,
             },
         })
    }

    const var_menu_module = $("#menu-module");
    const var_module = $("#module");
    const var_form = $('<form></form>');
    var_form.attr('id', 'form-timeline');


    var_menu_module.text('');
    var_module.text('');


    /*********************** Menu Module */
    var_menu_module.append(
        Title({
        	var_text: 'Options add new Timeline'
        })
    );

    var_menu_module.append(
        Button({
            var_class: "btn-save",
            var_text: "Save new Timeline",
            var_event: "click",
            var_action: (e => {handleSubmit(); renderTimeline();}),
        })
    );

    var_menu_module.append(
        Button({
            var_class: "btn-clear-form",
            var_text: "Clear form",
            var_event: "click",
            var_action: e => filedsClear([
                '#timeline-date',
                '#timeline-vehicle',
                '#timeline-driver',
                '#timeline-start-km',
                '#timeline-finish-km',
                '#timeline-fail',
                '#timeline-maintenance',
            ])
        })
    );

    var_menu_module.append(
        Button({
            var_class: "btn-back-consult",
            var_text: "Back to Consult Timeline",
            var_event: "click",
            var_action: (e => renderTimeline())
        })
    );

    var_menu_module.append(
        Button({
            var_class: "btn-back-home",
            var_text: "Back to Home",
            var_event: "click",
            var_action: (e => renderHome())
        })
    );
    /*********************** Module */
    var_module.append(
		Title({
    		var_text: 'New Timeline'
    	}) 
    );

    var_form.append('Timeline Date');
    var_form.append(
        Input({
            var_id: 'timeline-date',
            var_class: 'input-field',
            var_name: 'timeline-date',
            var_placeholder: 'Enter timeline date',
        })
    );
    
    var_form.append('Vehicle');
    var_form.append(
    		Input({
    			var_id: 'timeline-vehicle',
    			var_class: 'input-field',
    			var_name: 'timeline-vehicle',
    			var_placeholder: 'Enter timeline vehicle',
    		})
    );
    var_form.append('Driver');
    var_form.append(
    		Input({
    			var_id: 'timeline-driver',
    			var_class: 'input-field',
    			var_name: 'timeline-driver',
    			var_placeholder: 'Enter timeline driver',
    		})
    );

    var_form.append('Start Km');
    var_form.append(
        Input({
            var_id: 'timeline-start-km',
            var_class: 'input-field',
            var_name: 'timeline-start-km',
            var_placeholder: 'Enter timeline start km',
        })
    );

    var_form.append('Finish Km');
    var_form.append(
        Input({
            var_id: 'timeline-finish-km',
            var_class: 'input-field',
            var_name: 'timeline-finish-km',
            var_placeholder: 'Enter timeline finish km',
        })
    );
    
    var_form.append('Fail');
    var_form.append(
        Input({
            var_id: 'timeline-fail',
            var_class: 'input-field',
            var_name: 'timeline-fail',
            var_placeholder: 'Enter timeline fail',
        })
    );

    var_form.append('Maintenance');
    var_form.append(
        Input({
            var_id: 'timeline-maintenance',
            var_class: 'input-field',
            var_name: 'timeline-maintenance',
            var_placeholder: 'Click for add timeline maintenance',
            var_readOnly: 'true',
            var_action: e => renderButtonsAddMaintenance(),
        })
    );
    
    //=Buttons for add Maintenances================================================

    let divBtnsAddMaintenance = null;
    const addMaintenance = maintenance => {
    	$('#timeline-maintenance').attr('value', maintenance);
    }
    
    const renderButtonsAddMaintenance = () => {
    	if(!$('#container-add-maintenance').length){
	    	divBtnsAddMaintenance = $('<div></div>');
	    	divBtnsAddMaintenance.attr('class', 'container-add-maintenance');
	    	divBtnsAddMaintenance.attr('id', 'container-add-maintenance');
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Preventive",
	    				var_event: "click",
	    				var_action: e => {addMaintenance(
	    						'Preventive (Maintenance in Brake ,'+  
	    						'Air Filters, Candles, '+
	    				'Alignment e Balancing).'); getMaintenance = "Preventive";},
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Corrective",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    						'Corrective (Change of Oil, '+ 
	    				'Brake, Fuel Filter).'); getMaintenance = "Corrective";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Brake",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Maintenance in Brake'); getMaintenance = "Brake";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Air Filters",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Maintenance in Air Filters'); getMaintenance = "AirFilters";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Candles",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Maintenance in Candles'); getMaintenance = "Candles";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Alignment",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Alignment'); getMaintenance = "Alignment";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Balacing",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Balacing'); getMaintenance = "Balacing";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Change Oil",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Change Oil'); getMaintenance = "ChangeOil";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Change Brake",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Change Brake'); getMaintenance = "ChangeBrake";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-add-maintenance",
	    				var_text: "Change Fuel Filter",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				'Change Fuel Filter'); getMaintenance = "ChangeFuelFilter";}),
	    			})
	    	);
	    	
	    	divBtnsAddMaintenance.append(
	    			Button({
	    				var_class: "btn-clean-maintenance",
	    				var_text: "Clean",
	    				var_event: "click",
	    				var_action: (e => {addMaintenance(
	    				''); getMaintenance = null;}),
	    			})
	    	);
    	
	    	var_form.append(divBtnsAddMaintenance)
    	} else {
    		divBtnsAddMaintenance.remove();
    	}
	}
    
    var_module.append(var_form);

    const filedsClear = () => {
        var_form.children().val("");
    }

}
