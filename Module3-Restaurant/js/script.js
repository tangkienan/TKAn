$(function () {
	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768){
			$("#collapsable-nav").collapse('hide');
		}
	});
});

(function(global){
var dc = {};
var homeHtml = "snippets/home-snippet.html";

var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/categories-snippet.html";
// convenience function for inserting innerHTML fot 'select'
var insertHtml = function(selector,html){
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
};

// show loading icon inside element identified by 'selector'
var showLoading = function(selector){
	var html = "<div class='text-center'>";
	html += "<img src='images/ajax-loader.gif'></div>";
	insertHtml(selector,html);
};

// Return subtitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function(string, propN me, propValue){
	var propToReplace = "{{" + propName + "}}";
	string = string
		.replace(new RegExp(propToReplace, "g"), propValue);
	return string;
}



// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event){



// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
	homeHtml,
	function (responseText){
		document.querySelector("#main-content")
		 .innerHTML = responseText;
	},
	false);
}); 

// Load the menu categories view
dc.loadMenuCategories = function () {
	showLoading ("#main-content");
	$ajaxUtils.sendGetRequest(
		allCategoriesUrl,
		buildAndShowCategoriesHTML);
};


// Builds HTML for the categories page based on the davids-restaurant
// froms the server
function buildAndShowCategoriesHTML (categories){
	// Load title snippet of categories page
	$ajaxUtils.sendGetRequest(
		categoriesTitleHtml,
		function(categoriesTitleHTML){
			// Retrieve single category snippet
			$ajaxUtils.sendGetRequest(
				categoryHtml,
				function (categoryHtml){
					var categoriesViewHtml = 
					buildCategoriesViewHtml(categories,
											categoriesTitleHtml,
											categoryHtml);
					insertHtml("#main-content",categoriesViewHtml);											)	
				},
			false);
		},
	false);
}

global.$dc = dc;

})(window);