import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class TrimCodeMixin extends Vue {
  mounted() {
    // document.querySelectorAll("code").forEach(e => e.innerHTML = e.innerHTML.trim());
  }
}
