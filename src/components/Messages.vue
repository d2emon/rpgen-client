<template lang="pug">
  | {% with messages = get_flashed_messages(with_categories=True) %}
  |   {% for category, message in messages %}
  div(class="alert alert-{category}")
    | {{ message }}
  |   {% endfor %}
  | {% endwith %}
</template>

<script>
export default {
  name: 'messages'
}
</script>
