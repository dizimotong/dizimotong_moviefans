<template>
    <div class="movie">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>影片名</th>
              <th>电影年份</th>
              <th>导演</th>
              <th>影片上映时间</th>
              <th>购票人数</th>
              <th>电影类型</th>
              <th>电影评分</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(movie_title_item,index) in movie_title_items" :key="index">
              <td>{{movie_title_item.title}}</td>
              <td>{{movie_title_item.year}}</td>
              <td><div class="horizontal-div" v-for="(movie_directors,index) in movie_title_item.directors" :key="index">{{movie_directors.name + " "}}</div></td>
              <td><div class="horizontal-div" v-for="(movie_pubdates,index) in movie_title_item.pubdates" :key="index">{{movie_pubdates + " "}}</div></td>
              <td>{{movie_title_item.collect_count}}</td>
              <td><div class="horizontal-div" v-for="(movie_type,index) in movie_title_item.genres" :key="index">{{movie_type + " "}}</div></td>
              <td>{{movie_title_item.rating.average}}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
import Bus from '../bus'
export default {
  name: 'Movie',
  data () {
    return {
      movie_title: '',
      movie_title_items: [],
      movie_city: ''
    }
  },
  filters: {},
  mounted () {
    this.$nextTick(function () {
      this.getCity()
      this.getAreaMovies()
    })
  },
  methods: {
    getAreaMovies () {
      var url = '/api/movie/in_theaters'
      var count = 10
      var start = 0
      var requestUrl = '?city=' + this.movie_city + '&start=' + start + '&count=' + count
      this.axios.get(url + requestUrl).then(res => {
        this.movie_title = res.data.subjects
        this.getMoviesTitle(this.movie_title)
        console.log(res.data.subjects)
      }).catch(err => {
        console.error(err)
      })
    },
    getMoviesTitle (item) {
      item.forEach((value, index) => {
        this.movie_title_items.push(value)
      })
    },
    getCity () {
      Bus.$on('city', (value) => {
        console.log(value)
        this.movie_city = value
        this.movie_title_items = []
        this.getAreaMovies()
      })
    }
  }
}
</script>
<style scoped>
.horizontal-div{
  display:inline;
}
</style>
