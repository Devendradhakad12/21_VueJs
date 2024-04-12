<script setup>
import HelloWorld from "./components/HelloWorld/HelloWorld.vue";
import AttributeBind from "./components/TemplateSyntex/AttributeBind.vue";
import DynamicBind from "./components/TemplateSyntex/DynamicBind.vue";
import GlobalStyle from "./components/Styles/GlobalStyle.vue";
import LocalStyle from "./components/Styles/LocalStyle.vue";
import CombinedStyle from "./components/Styles/CombinedStyle.vue";
import ModuleStyle from "./components/Styles/ModuleStyle.vue";
import MyEvents from "./components/EventListeners/MyEvents.vue";
import MyReactive from "./components/DeclarativeRendering/MyReactive.vue";
import MyRef from "./components/DeclarativeRendering/MyRef.vue";
import RefInReactive from "./components/DeclarativeRendering/RefInReactive.vue";
import FormHandling from "./components/FormBinding/FormHandling.vue";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering.vue";
import ComputedProperty from "./components/ComputedProperty/ComputedProperty.vue";
</script>

<template>
  <div>
    <HelloWorld />

    <!-- Binding  -->
    <AttributeBind />
    <DynamicBind />

    <!-- Styling -->
    <GlobalStyle />
    <LocalStyle />
    <CombinedStyle />
    <ModuleStyle />

    <!-- Events -->
    <MyEvents />

    <!-- Declarative Rendering -->
    <MyReactive />
    <MyRef />
    <RefInReactive />

    <!-- Form Binding -->
    <FormHandling />

    <!-- Conditional Rendering -->
    <ConditionalRendering />

    <!-- Computed Property -->
    <ComputedProperty />
  </div>
</template>

<style></style>
