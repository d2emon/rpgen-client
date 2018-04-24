<template lang="pug">
  v-toolbar(
    app
    :fixed="fixed"
    :clipped-left="clipped"
  )
    v-toolbar-title(
      :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'"
      class="ml-0 pl-3"
      v-text="title"
    )
    v-spacer

    template(v-if="authenticated")
      v-btn(flat to="/user.after_login") Dashboard
      v-btn(flat to="/rpg/index") RPG
      v-btn(flat) Systems <span class="caret"></span>
      ul(class="dropdown-menu")
        li
          a(href="{ url_for('pathfinder.index') }") Pathfinder
        li
          a(href="{ url_for('gurps.index') }") GURPS
        li
          a(href="{ url_for('tnt.index') }") Tunels & Trolls
      v-btn(flat to="/world/world_list") Worlds
      v-btn(flat v-if="admin") Admin <span class="caret"></span>
      ul(class="dropdown-menu")
        li
          a(href="{ url_for('admin.list_departments') }") Departments
        li
          a(href="{ url_for('admin.list_roles') }") Roles
        li
          a(href="{ url_for('admin.list_employees') }") Employees
      v-btn(flat to="/auth/logout") Logout
      v-btn(flat) <i class="fa fa-user"></i> Hi, {{ username }}!
    template(v-else)
      v-btn(flat to="/home/index") Home
      v-btn(flat to="/auth/register") Register
      v-btn(flat to="/auth/login") Login
</template>

<script>
export default {
  name: 'app-header',
  data: () => ({
    clipped: true,
    fixed: true,

    authenticated: false,
    title: 'RPG-Helper'
  })
}
</script>
