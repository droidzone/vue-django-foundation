<template>
        <!-- Start Top Bar -->
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">
          {% block brand-name %}
          Shorten App
          {% endblock %}
          </li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Dashboard</a></li>
        </ul>
      </div>
    </div>
    <!-- End Top Bar -->
</template>