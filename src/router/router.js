import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { 
    path: '/', 
    redirect: '/pokemon'
  },
  { 
    path: '/pokemon', 
    name: 'pokemon',
    component: ( )=> import(/* webpackChunkName: "PokemonLayouts"*/'@/modules/pokemon/layouts/PokemonLayouts'),
    children: [
      {
        path: 'home', 
        name: 'pokemon-home',
        component: () => import( /* webpackChunkName: "ListPage" */'@/modules/pokemon/pages/ListPage')
      },
      { 
        path: 'about', 
        name: 'pokemon-about',
        component: () => import( /* webpackChunkName: "AboutPage"*/'@/modules/pokemon/pages/AboutPage'
      )},
      { 
        path: 'pokemonid/:id', 
        name: 'pokemonid', 
        component: () => import( /* webpackChunkName: "PokemonPage" */'@/modules/pokemon/pages/PokemonPage'),
        props: (route) => {
          const id = Number(route.params.id)
          return isNaN(id) ? { id: 1 } : { id: id }
        },
      },
      
      { 
        path: '', 
        redirect: { name: 'pokemon-home'}
      },
    ]
  },
  // DBZ
  {
    path: '/dbz',
    name: 'dbz',
    component: () => import(/* webpackChunkName: "DBZLayouts"*/'@/modules/dbz/layouts/DragonBallLayouts'),
    children:[
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import(/* webpackChunkName: "DBZ-About"*/'@/modules/dbz/pages/About')
      },
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(/* webpackChunkName: "DBZ-Characters"*/'@/modules/dbz/pages/Characters')
      },
      { 
        path: '', 
        redirect: { name: 'dbz-characters'}
      },
    ]

  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import( /* webpackChunkName: "NotPageFound" */'@/modules/shared/pages/NotPageFound'
  )},
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router