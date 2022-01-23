<template>
  <div class="flex justify-center flex-col content-center items-center space-y-6">

    <div :class="['px-0.5 py-1 border w-24 ', textAlignment, fontBold, fontItalic, borderStyle]"
         :style="{background: fillColor}">
      Ячеечка
    </div>

    <div class="flex md:space-x-2 md:flex-row flex-col md:space-y-0 space-y-2  md:justify-between items-center md:items-start w-full">
      <div class="flex ">
        <div :class="['btn start', alignment === 'left' ? 'bg-pink-50'  : '' ]" @click="alignment = 'left'">a__</div>
        <div :class="['btn', alignment === 'center' ? 'bg-pink-50'  : '' ]" @click="alignment = 'center'">_a_</div>
        <div :class="['btn end', alignment === 'right' ? 'bg-pink-50'  : '' ]" @click="alignment = 'right'">__a</div>
      </div>

      <div class="flex">
        <div :class="['btn start', 'font-bold', bold ? 'bg-pink-50' : '']" @click="bold = !bold">B</div>
        <div :class="['btn ', 'italic', italic ? 'bg-pink-50': '']" @click="italic = !italic">I</div>
        <div :class="['btn end', 'font-bold', border ? 'bg-pink-50' : '']" @click="border = !border">🔲</div>
      </div>


      <div class="flex">
        <div class="start border px-2 py-1 text-center">🖌</div>
        <div class="end border px-2 py-1 "><input type="color" class="border-none w-20" v-model="fillColor"/></div>
      </div>
    </div>

    <div class="nuxt-content-highlight w-full" v-if="cellCode"><pre class="language-python"><code>{{cellCode}}</code></pre></div>

  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class StyleGen extends Vue {
  alignment: 'left' | 'center' | 'right' = 'left';
  bold = false;
  italic = false;
  border = false;
  fillColor = "000000";

  get textAlignment() {
    return `text-${this.alignment}`;
  }

  get fontBold() {
    return this.bold ? 'font-bold' : '';
  }

  get fontItalic() {
    return this.italic ? 'italic' : '';
  }

  get borderStyle() {
    return this.border ? 'border-black' : '';
  }

  get cellCode() {
    const alignment = this.alignment !== 'left' ? `cell.alignment = Alignment(horizontal='${this.alignment}')` : '';

    let font = '';
    if (this.bold || this.italic) {
      const fontParts = [
        this.bold ? 'bold=True' : '',
        this.italic ? 'italic=True' : '',
      ]
      font = `cell.font = Font(${fontParts.filter(p => p).join(', ')})`;
    }

    let border = '';
    if (this.border) {
      border = `side = Side(style='thin', color='000000')
cell.border = Border(left=side, top=side, right=side, bottom=side)`;
    }

    let fillColor = '';
    if (this.fillColor !== '000000') {
      fillColor = `color = '${this.fillColor.replace('#', '')}'
cell.fill = PatternFill(
    start_color=Color(color), end_color=Color(color),
    fill_type='solid',
)`
    }

    return [
      alignment,
      font,
      border,
      fillColor,
    ].filter(p => p)
      .join("\n");
  }
}
</script>

<style scoped>
.btn {
  @apply border px-2 py-1 hover:bg-pink-100 cursor-pointer min-w-max w-10 text-center;
}

.start {
  @apply border-r-0 rounded-none rounded-l;
}

.end {
  @apply border-l-0 rounded-none rounded-r;
}


</style>
