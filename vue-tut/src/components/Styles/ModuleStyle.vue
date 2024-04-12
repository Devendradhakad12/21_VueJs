<template>
  <div>
    <h1 v-bind:class="myClasses['module-style']">--Module Style</h1>
    <p :class="myClasses.camelCase">
      Using module CSS with $ syntax (camelCase)
    </p>
    <!--     <p :class="$style.camelCase">Using module CSS with $ syntax (camelCase)</p> -->
    <hr />
  </div>
</template>

<!-- Module style -->
<style module="myClasses">
.module-style {
  color: seagreen;
}
.camelCase {
  color: sienna;
}
</style>
