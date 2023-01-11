var hamburger = document.getElementById('mobileMenu');
var closeMobileMenu = document.getElementById('closeMobileMenu');
var mobileMenuDiv = document.getElementById('mobileMenuDiv');
var modal = document.getElementById('modal');

var subMenus = document.querySelectorAll('.subMenu');
var menuIcons = document.querySelectorAll('.menuIcon');
var menus = document.querySelectorAll('.menu');

hamburger.addEventListener('click', hamburgerClick);
closeMobileMenu.addEventListener('click', closeMobileMenuClick);
menus.forEach((menu) => menu.addEventListener('click', onMenuClick));
menus.forEach((menu) => menu.addEventListener('focusout', onMenuFocusout));

window.onresize = reportWindowSize;
function reportWindowSize() {
  if (!modal.classList.contains('hidden')) {
    // modal.classList.add('hidden');
    // mobileMenuDiv.classList.add('-right-full');
    // closeMobileMenu.classList.add('hidden');
  }
}

function hamburgerClick() {
  showHideMenu();
}

function closeMobileMenuClick() {
  showHideMenu();
}

function showHideMenu() {
  mobileMenuDiv.classList.toggle('-right-full');
  mobileMenuDiv.classList.toggle('right-0');
  hamburger.classList.toggle('hidden');
  closeMobileMenu.classList.toggle('hidden');
  document.getElementById('modal').classList.toggle('hidden');
}

function onMenuClick(e) {
  const subMenuID = e.target.parentElement.getAttribute('data-target');
  const iconID = e.target.parentElement.getAttribute('menu-icon');

  setTimeout(function () {
    if (subMenuID)
      document.getElementById(subMenuID).classList.toggle('hidden');
    if (iconID)
      document.getElementById(iconID).classList.toggle('menuIconRotate');
  }, 90);
}

function onMenuFocusout(e) {
  if (
    window.getComputedStyle(document.getElementById('hamBurgerDiv'))
      .visibility === 'hidden'
  ) {
    setTimeout(function () {
      subMenus.forEach((e) => e.classList.add('hidden'));
      menuIcons.forEach((e) => e.classList.remove('menuIconRotate'));
    }, 80);
  }
}
