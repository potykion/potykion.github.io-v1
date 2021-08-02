<template>
  <div>
    <article-heading
      title="Архив"
      description="Всякое недописанное/бесполезное, то, что нуждается в доработке/переработке"
      emote="sleep"
    ></article-heading>

    <template v-for="page in pages">
      <article-preview :article="page"></article-preview>
    </template>

    <article-preview :article="{title: 'Рисовач', description: 'Как научится рисовать, что делать если лень, куда я хожу', link: '/archive/art'}"></article-preview>
    <article-preview :article="{title: 'Гиги', description: 'Концертики, которые я планирую посетить в этом году (если конечно они состоятся в такие ковидные времена)', link: '/archive/gigs'}"></article-preview>
    <article-preview :article="{title: 'Ютуб', description: 'Моя история познания ютуба и каналы, которые я смотрю', link: '/archive/yt'}"></article-preview>
  </div>

</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";
import {buildArticleVM} from "@/logic/cool-story/vms";

export default {
  async asyncData({$content, params}) {
    const pages = (await $content("archive", {deep: true}).fetch()).map(buildArticleVM);

    return {pages};
  },
  head() {
    return generateSeoHead(
      "Архив",
      "Всякое недописанное/бесполезное, то, что нуждается в доработке/переработке",
    );
  },
}
</script>
