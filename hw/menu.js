function Container() {
  this.tagName = 'div';
  this.className = 'container';
  this.id = randomId(5);
}

function randomId(length) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

  if (! length) {
      length = Math.floor(Math.random() * chars.length);
  }

  var str = '';
  for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

Container.prototype.render = function() {
  var element = document.createElement(this.tagName);
  element.id = this.id;
  element.className = this.className;
  
  return element;
}

Container.prototype.remove = function() {
  var element = document.getElementById(this.id);
  element.parentNode.removeChild(element);
}

function Menu(className, id, items) {
  Container.call(this);

  this.tagName = 'ul';
  this.className = className;
  this.id = id;
  this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {
  var menu = document.createElement(this.tagName);
  menu.className = this.className;
  menu.id = this.id;

  this.items.forEach(function(item) {
    if(item instanceof MenuItem) {
      menu.appendChild(item.render());
    }
  });

  return menu;
}

function SuperMenu(className, id, items, menu) {
  Container.call(this);

  this.tagName = 'ul';
  this.className = className;
  this.id = id;
  this.items = items;
  this.menu = menu;
}

SuperMenu.prototype = Object.create(Container.prototype);
SuperMenu.prototype.render = function() {
  var superMenu = document.createElement(this.tagName);
  superMenu.className = this.className;
  superMenu.id = this.id;

  var menu = this.menu
  this.items.forEach(function(item) {
    if(item instanceof MenuItem) {
      superMenu.appendChild(item.superRender(menu));
    }
  });

  return superMenu;
}

function MenuItem(href, title) {
  Container.call(this);

  this.tagName = 'li';
  this.className = 'menu-item';
  this.href = href;
  this.title = title;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
  var li = document.createElement(this.tagName);
  li.className = this.className;

  var link = document.createElement('a');
  link.href = this.href;
  link.textContent = this.title;

  li.appendChild(link);

  return li;
}

MenuItem.prototype.superRender = function(menu) {
  var li = document.createElement(this.tagName);
  li.className = this.className;

  var link = document.createElement('a');
  link.href = this.href;
  link.textContent = this.title;

  li.appendChild(link);
  li.appendChild(menu.render());

  return li;
}

window.onload = function() {
  var items = [
    new MenuItem('https://geekbrains.ru', 'Home'),
    new MenuItem('https://geekbrains.ru', 'News'),
    new MenuItem('https://geekbrains.ru', 'Blog'),
  ]
  
  var menu = new Menu('menu', 'menu', items);
  var superMenu = new SuperMenu ('supermenu', 'supermenu', items, menu)
  document.body.appendChild(menu.render());
  document.body.appendChild(superMenu.render());

  menu.remove();
}

