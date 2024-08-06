<template>
  <nav id="header-top" class="navbar">
    <div class="nav-logo">
      <div class="container">
        <a class="navbar-brand m-auto" href="/">GIÁ VÀNG</a>
      </div>
    </div>
    <div class="nav-sub">
      <div class="container">
        <RouterLink class="nav-link m-auto" to="/home">Tổng hợp giá vàng</RouterLink>
        <RouterLink class="nav-link m-auto" to="/chart">Biểu đồ</RouterLink>
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
  border-bottom: 0.0625rem solid #0f599a;
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

.nav-sub {
  background-color: #fff;
  text-align: left !important;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}

.nav-sub .container {
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.nav-sub .nav-link {
  border-left: 1px dotted rgba(0, 0, 0, 0.2);
  border-right: 1px dotted rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  line-height: 30px;
  padding: 5px 10px;
  font-weight: 600;
}

a {
  text-decoration: none;
  background-color: transparent;
}
</style>
<script setup></script>
