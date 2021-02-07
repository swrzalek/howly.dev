<template>
  <Layout>
    <div class="letter-container">
      <div class="letter letter_s" ref="letter_s">S</div>
      <div class="letter letter_w" ref="letter_w">W</div>
    </div>
    <!--        <Articles :articles="$page.strapi.articles" />-->
  </Layout>
</template>

<page-query>
query {
  strapi {
    global {
      siteName
      favicon {
        url
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
    homepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
    articles(where: { status: "published" }) {
      slug
      title
      category {
        name
      }
      image {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import Articles from "~/components/Articles";
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";
import anime from "animejs";

export default {
  components: {
    Articles,
  },
  methods: {
    translate(element, { rotate, tx, ty, duration, delay }) {
      anime({
        rotate,
        targets: element,
        translateX: tx,
        translateY: ty,
        duration: duration,
        loop: true,
        easing: "easeInOutSine",
        delay,
      });
    },
  },
  mounted() {
    this.translate(this.$refs.letter_s, {
      rotate: [10, 10],
      tx: "300vh",
      ty: 100,
      duration: 45000,
      delay: 0,
    });
    this.translate(this.$refs.letter_w, {
      tx: "-300vh",
      ty: 100,
      duration: 45000,
      delay: 3000,
      rotate: [10, 10],
    });
  },
  metaInfo() {
    const { seo } = this.$page.strapi.homepage;
    const { defaultSeo, favicon } = this.$page.strapi.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
