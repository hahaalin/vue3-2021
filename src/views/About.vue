<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Card></Card>
</template>

<script>
import Card from '@/components/Card.vue'

// 要把卡片js匯出所以要export...
export default {
  components: {
    Card
  }
}
</script>
