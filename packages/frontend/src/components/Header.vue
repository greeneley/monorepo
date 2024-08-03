<template>
  <nav id="header-top" class="navbar">
    <div class="nav-logo">
      <div class="container">
        <a class="navbar-brand m-auto" href="/">GIÁ VÀNG</a>
      </div>
    </div>
  </nav>
</template>

<style>
#header-top {
  background-color: #01498a;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
}

#header-top > div {
  width: 100%;
  text-align: center;
}

.nav-logo {
  border-bottom: .0625rem solid #0f599a;
}


.nav-logo .container {
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.navbar .navbar-brand {
  font-weight: 600;
  font-size: 2.3rem;
  color: white;
}

a {
  text-decoration: none;
  background-color: transparent;
}

</style>