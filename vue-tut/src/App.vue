<script setup>
import { ref, provide } from "vue";
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
import ListRendering from "./components/ListRendering/ListRendering.vue";
import LifecycleTemplateRefs from "./components/LifecycleTemplateRefs/LifecycleTemplateRefs.vue";
import Watchers from "./components/Watchers/Watchers.vue";
import PropsEmits from "./components/PropsEmits/PropsEmits.vue";
import ComplexProps from "./components/PropsEmits/ComplexProps.vue";
import CustomValidator from "./components/PropsEmits/CustomValidator.vue";
import Emits from "./components/PropsEmits/Emits.vue";
import Slot from "./components/Slot/Slot.vue";
import Fallback from "./components/Slot/Fallback.vue";
import NamedSlots from "./components/Slot/NamedSlots.vue";
import DefaultSlot from "./components/Slot/DefaultSlot.vue";
import ParentComponent from "./components/ProvideAndInject/ParentComponent.vue";
import FunctionRef from "./components/LifecycleTemplateRefs/FunctionRef.vue";
import RefComponent from "./components/RefComponent/RefComponent.vue";
import ToggleFriends from "./components/AsyncComponent/ToggleFriends.vue";
import Composable from "./components/Composable/CounterComponent.vue";
import MyCustomDirective from "./components/CustomDirectives/MyCustomDirective.vue";
import DynamichC from "./components/DynamicComponents/DynamichC.vue";

const message = ref("Message From Parent");
const childMsg = ref("No child msg yet");
const handleChildForm = (username, password) => {
  console.log(username, password);
};
const dataForChildComponent = ref(
  "Data for child component Form Grand Parent (App) Component"
);
provide("dataForChildComponent", dataForChildComponent);
const isShow = ref(true);
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

    <!-- Form Binding (Two way data binding)-->
    <FormHandling />

    <!-- List Rendering -->
    <ListRendering />

    <!-- Conditional Rendering -->
    <ConditionalRendering />

    <!-- Computed Property -->
    <ComputedProperty />

    <!-- Watchers -->
    <Watchers />

    <!-- Props and Emits -->
    <div>
      <PropsEmits :msg="message" @response="(msg) => (childMsg = msg)" />
      <p>{{ childMsg }}</p>
      <ComplexProps
        :friends="['dev', 'ajay', 'deepak', 'pavan']"
        :userInfo="{ name: 'prince', age: 20, location: ['Earth'] }"
      />
      <CustomValidator name="Ram" />
      <Emits @submitHandler="handleChildForm" />
      <hr />
    </div>

    <!-- Slot -->
    <Slot>
      <h3>Slot Content 1</h3>
      <h3>Slot Content 2</h3>
    </Slot>

    <!-- Named Slots -->
    <NamedSlots>
      <template v-slot:one> This content will go to slot one <br /> </template>
      <template #two> This content will go to slot two </template>
    </NamedSlots>

    <!-- Default Slot -->
    <DefaultSlot>
      <template #default>
        <h3>Default Slot Content</h3>
      </template>
    </DefaultSlot>

    <!-- Fallback -->
    <div>
      <h1>--Fallback</h1>
      <Fallback> </Fallback>
      <Fallback
        >Fallback will not work beacuse i'm providing content inside the
        component
      </Fallback>
      <hr />
    </div>
  </div>

  <!-- Provide and Inject -->
  <ParentComponent />

  <!-- Lifecycle and Template Refs -->
  <div>
    <LifecycleTemplateRefs v-if="isShow" />
    <button @click="() => (isShow = !isShow)">
      {{ isShow ? "Hide" : "Show" }}
    </button>
    <FunctionRef />
    <hr />
  </div>

  <!-- Ref Component -->
  <RefComponent />

  <!-- Async Component -->
  <ToggleFriends />

  <!-- Composable -->
  <Composable />

  <!-- Custom Directive -->
  <MyCustomDirective />

  <!-- Dynamic Components -->
  <DynamichC />
</template>

<style></style>
