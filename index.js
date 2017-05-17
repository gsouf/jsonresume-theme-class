var fs = require("fs");
var Handlebars = require("handlebars");

Handlebars.registerHelper('dateYear', function(date){
	return date.substring(0, 4);
});

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};
