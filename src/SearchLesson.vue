<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
      </div>
      <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="text" />
    </div>
   
    <div class="lesson-list">
      <div class="lesson" v-for="(lesson,idx) in lessons" :key="idx">{{idx}}
        <img :src="lesson.cover"/>
        <span>{{ lesson.title }}</span>
        <label>{{ lesson.owner.username}}</label>
      </div>
    </div>
  </div>
</template>
<script>
import debounce from "lodash/debounce";

const SEARCH_API = "https://hiskio.com/api/v1/courses/search?word=";
export default {
  data() {
    return {
      text: "",
      lesson: []
    };
  },
  methods: {
    search(val) {
      fetch(`${SEARCH_API}${val}`)
        .then(rs => rs.json())
        .then(data => {
          this.lessons = data.courses;
        });
    }
  },
  watch: {
    text(val) {
      this.searchDebounced(val);
    }
  },
  created() {
    this.searchDebounced = debounce(this.search, 500);
  }
};
</script>
<style>
.lesson img {
  width: 100px;
}
.lesson span,
.lesson label {
  display: block;
}
</style>
