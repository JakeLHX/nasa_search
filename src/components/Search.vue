<template>
  <div class="search">
    <h1>{{ msg }}</h1>
    <nav class="navbar">
      <form class="searchbar">
        <input
          type="text"
          placeholder="Search Terms"
          v-model="input"
          class="searchbar-input"
        />
        <div> </div>
        <select name="type" v-model="type" class="searchbar-select">
          <option value="" selected disabled hidden>Choose Type</option>
          <option value="image" selected="selected">Image</option>
          <option value="video">Video</option>
        </select>
        <button
          v-on:click.prevent="method1(input, type)"
          type="submit"
          class="btn btn--orange btn--go"
        >
          Search
        </button>
      </form>
    </nav>
    <div v-if="type == 'image'">
      <div v-if="results">
        <ul class="image-card-grid">
          <ImageBox
            v-for="result in results.slice(0, 9)"
            :key="result.data[0].nasa_id"
            :result="result"
          />
        </ul>
      </div>
    </div>
    <div v-if="type == 'video'">
      <div v-if="results">
        <ul class="image-card-grid">
          <VideoBox
            v-for="result in results.slice(0, 9)"
            :key="result.data[0].nasa_id"
            :result="result"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { browseralert } from "./functions/functionlist";
import { getResults } from "./functions/functionlist";
import ImageBox from "./ImageBox";
import VideoBox from "./VideoBox";

export default {
  name: "search",
  components: {
    ImageBox,
    VideoBox,
  },
  data() {
    return {
      msg: "Jake Harvey's Highly Impressive Nasa Image DB Search",
      input: "",
      type: "",
      results: "",
    };
  },
  methods: {
    method1(input, type) {
      if (type == "image") {
        /**browseralert(input, type); */
        getResults(input, type).then((res) => {
          console.log(res);
          this.results = res;
        });
      } else if (type == "video") {
        getResults(input, type).then((res) => {
          console.log(res);
          this.results = res;
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.screen-reader-only {
  height: 1px;
  width: 1px;
  position: absolute;
  left: -100000px;
}
.text-centered {
  text-align: center;
}
.wrapper {
  margin: 0 auto;
  max-width: 800px;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
.image-card-grid {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #f0f0f0;
}
.searchbar {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 549px) {
    width: 100%;
    label {
      width: 80%;
    }
  }
}
.searchbar-input {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  border: 1px solid gray;
  min-width: 300px;
  @media only screen and (max-width: 549px) {
    min-width: 0;
    width: 100%;
  }
}
.searchbar-select {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  border: 1px solid gray;
  min-width: 150px;
  @media only screen and (max-width: 549px) {
    min-width: 0;
    width: 100%;
  }
}
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  background: transparent;
  border: none;
}
.btn--orange {
  background: #fc8c42;
  color: white;
  font-weight: bold;
}
.btn--go {
  padding: 0.5rem 2rem;
  margin-left: 1rem;
}
.image-card-grid {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
