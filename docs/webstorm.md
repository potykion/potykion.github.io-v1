# Шаблон для Webstorm

1. `Settings > Editor > File and Code Templates`

2. Создаем новый темплейт с такими опциями

  - **Name:** vue-ts
  - **Extension:** vue
  - [x] Reformat according to style
  - [x] Enable Live Templates
  
  С таким содержимым:
  
  ```
  <template>
  
  </template>
  
  <script lang="ts">
  
      import {
          Component,
          Prop,
          Vue,
      } from "nuxt-property-decorator"
  
      @Component({
        head: () => ({
          title: "Я ЗАБЫЛ УКАЗАТЬ ЗАГОЛОВОК"
        }),
      })
      export default class ${NAME} extends Vue {
         
      }
  </script>
  
  <style scoped>
  </style>
  ```
