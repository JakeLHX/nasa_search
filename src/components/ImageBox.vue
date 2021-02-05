<template>
  <li class="image-card">
    <img class="image-card__image" :src="result.links[0].href" :alt="result.data[0].title" />
    <div class="image-card__body">
      <p v-if="result.data[0].title" class="image-title">{{ result.data[0].title }}</p>
      <p v-else class="image-title">No Title Found</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ImageBox',
  props: ['result'],
};
</script>

<style>
.image-card {
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
.image-card__image {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.image-card__body {
  padding: .5rem 1rem 1rem;
}
.image-title {
  font-weight: bold;
  margin: 0;
}
</style>