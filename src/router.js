import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './views/Movie.vue'
import Music from './views/Music.vue'
import MusicList from './views/MusicList.vue'
import Book from './views/Book.vue'
import Photo from './views/Photo.vue'
import Details from './views/Details.vue'
import PhotoDetails from './views/PhotoDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/details/:id',
      component: Details
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    },
    {
      path: '/musiclist',
      name: 'musiclist',
      component: MusicList
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/photodetails/:index',
      name: 'photodetails',
      component: PhotoDetails
    },
  ]
})
