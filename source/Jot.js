enyo.kind({
	name: "Jot",
	kind: enyo.VFlexBox,
	components: [
		//VFlexBox components
		{kind: "PageHeader", components: [
			//PageHeader components
			{content: "Jot", flex: 1}, //filename
			{name: "SaveAndExitButton", kind: "Button", label: "Save & Exit", onclick: "buttonClick"}
		]},
		{flex: 1, kind: "Scroller", autoHorizontal: false, horizontal: false, autoVertical: true, components: [
				{name: "theText", kind: "RichText", richContent: false}

		]},
		{kind: "Toolbar", components: [
			//Toolbar components
			{name: "NewButton", kind: "Button", label: "New", value: "one", onclick: "buttonClick"},
			{name: "OpenButton", kind: "Button", label: "Open", onclick: "buttonClick"},
			{name: "SaveButton", kind: "Button", label: "Save", onclick: "buttonClick"}
		]}
	],
	buttonClick: function(inSender, inEvent) {
		// handle click
		switch(inSender.label) {
		case "Save & Exit": //save file, close app
			alert("Save & Exit button clicked")
			break;
		case "New": //erase theText
			alert("New button clicked")
			break;
		case "Open": //open file dialog
			alert("Open button clicked")
			break;
		case "Save": //save file dialog
			alert("Save button clicked")
			break;
		default:
			alert(inSender + inEvent + inSender.label)
	}
	}
});
