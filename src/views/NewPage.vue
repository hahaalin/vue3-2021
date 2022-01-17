<template>
<div class="row">
  <div class="col">
    <div class="list-group">
  <router-link to="/newPage/a" class="list-group-item list-group-item-action" :class="{'active':tabactive=='a'}" @click="tabactive='a'" aria-current="true">選單A</router-link>
  <router-link to="/newPage/b" class="list-group-item list-group-item-action" :class="{'active':tabactive=='b'}" @click="tabactive='b'">選單B</router-link>
  <router-link to="/newPage/nameView/ctoa" class="list-group-item list-group-item-action" :class="{'active':tabactive=='ctoa'}" @click="tabactive='ctoa'">命名ctoa</router-link>
  <router-link to="/newPage/nameView/atob" class="list-group-item list-group-item-action" :class="{'active':tabactive=='atob'}" @click="tabactive='atob'">命名atob</router-link>

</div>

  </div>
  <div class="col">

    <router-view></router-view>
  </div>
</div>

</template>
<script>
export default {
  data () {
    return {
      tabactive: ''
    }
  }
}
</script>
