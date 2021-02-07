const c1 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/templates/Category.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/templates/Article.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/kalmar/Projects/howly.dev/frontend/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/kalmar/Projects/howly.dev/frontend/src/pages/Index.vue")

export default [
  {
    path: "/category/new-category/",
    component: c1
  },
  {
    path: "/article/new-article/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
