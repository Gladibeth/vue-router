import { createRouter, createWebHashHistory } from 'vue-router'
import autorizedGuard from './auth-guard'

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
        name: 'PokemonPage', 
        redirect: { name: 'pokemon-home'}
      },
    ]
  },
  // DBZ
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [autorizedGuard],
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
        name: 'DBZPage', 
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


// guard synchronous
/* router.beforeEach((to, from, next) => {
    //console.log({to,from,next})
    const random = Math.random() * 100;
    console.log(random)
    if( random > 50){
      console.log('Autenticado')
      next();
    }else{
      console.log('Bloqueado por beforeEach ')
      next({name: 'pokemon-home'});
    }
    
}) */

//Guard Async

/* const canAccess = () => {
  return new Promise((resolve) => {
    const random = Math.random() * 100;
    if( random > 50){
      console.log('Autenticado - canAccess')
      resolve(true)
    }else{
      console.log('Bloqueado por beforeEach - canAccess ')
      resolve(false)
    }
  });
}

router.beforeEach( async(to,from,next) => {
  const autorized = await canAccess();

  autorized ? next() : next({name: 'pokemon-home'});
})
 */


export default router