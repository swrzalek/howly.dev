const c1 = () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/templates/Article.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--snippets-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/pages/Snippets.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/kalmar/Projects/howly.dev/frontend/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/pages/Index.vue")

export default [
  {
    path: "/article/second-test-article/",
    component: c1
  },
  {
    path: "/category/new-category/",
    component: c2
  },
  {
    path: "/article/new-article/",
    component: c1
  },
  {
    path: "/snippets/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
