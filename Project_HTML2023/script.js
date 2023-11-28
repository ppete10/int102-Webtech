function toggleHam(x) {
    x.classList.toggle("change");
    let myMenu = document.getElementById('dropdown')
    if(myMenu.className === 'dropdown-menu'){
      myMenu.className += ' dropdown-menu-active'
    }else {
      myMenu.className = 'dropdown-menu'
    }
  }