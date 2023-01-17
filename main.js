// Mobile responsive menu section start

// mobile main menu start
$('.responsive-menu-hide').hide();
$('.responsive-menu-item').hide();

$('.responsive-menu-show').click(function(){
    $('.responsive-menu-item').slideDown();
    $('.responsive-menu-show').hide();
    $('.responsive-menu-hide').show()
});

$('.responsive-menu-hide').click(function(){
    $('.responsive-menu-item').slideUp();
    $('.responsive-menu-hide').hide();
    $('.responsive-menu-show').show()
});


$('.click-menu').click(function(){
	$('.responsive-menu-hide').hide()
	$('.responsive-menu-show').show()
	$('.responsive-menu-item').slideUp();
})

// Mobile Menu close

	

//  package drown menu start

$('.package-dropdown').hide();
$('.package-dropdown-hide').hide();
$('.package-dropdown-show').click(function(){
    $('.package-dropdown').slideDown();
    $('.package-dropdown-show').hide();
    $('.package-dropdown-hide').show()
});

$('.package-dropdown-hide').click(function(){
    $('.package-dropdown').slideUp();
    $('.package-dropdown-hide').hide();
    $('.package-dropdown-show').show()
});
// Package dropdown menu close




// submenu1 dropdown start

$('.submenu1-dropdown-hide').hide();
$('.submenu1-dropdown').hide();
$('.submenu1-dropdown-show').click(function(){
    $('.submenu1-dropdown').slideDown();
    $('.submenu1-dropdown-show').hide();
    $('.submenu1-dropdown-hide').show()
});

$('.submenu1-dropdown-hide').click(function(){
    $('.submenu1-dropdown').slideUp();
    $('.submenu1-dropdown-hide').hide();
    $('.submenu1-dropdown-show').show()
});
// Submenu1 dropdown menu close

// Mobile responsive menu section close











