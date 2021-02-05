<template>
  <li class="video-card">
    <video 
    class="video-card__video"  
    :alt="result.data[0].title" 
    muted
    controls
    :src=method2(result.data[0].nasa_id) type="video/mp4"
    />
    <div class="video-card__body">
      <p v-if="result.data[0].title" class="video-title">
        {{ result.data[0].title }}
      </p>
      <p v-else class="video-title">No Title Found</p>
    </div>
  </li>
</template>

<script>
import { getorigmp4src } from "./functions/functionlist";

export default {
  name: "VideoBox",
  props: ["result"],
  data() {
    return {
      video: "",
    };
  },
  methods: {
    method2(id) {
      getorigmp4src(id).then((res) => {
        this.video = res[0].href;
      });
      return this.video;
    },
  },
};
</script>

<style>
.video-card {
  width: calc(33% - 1rem);
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: white;
  color: #000000;
  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: 0.5rem 0;
  }
}
.video-card__video {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.video-card__body {
  padding: 0.5rem 1rem 1rem;
}
.video-title {
  font-weight: bold;
  margin: 0;
}
</style>