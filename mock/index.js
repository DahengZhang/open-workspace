const { mock } = require('mockjs')

const apis = require.context('./', true, /\.js$/)

apis.keys().map(key => {
  const api = key.match(/(\/\S*)\.js/) && key.match(/(\/\S*)\.js/)[1] || '/'
	apis(key) && mock(
		new RegExp(`^(${api})($|\\?.*)`) // 兼容 url 中带参数的请求，使用正则匹配前半段
		, apis(key))
})
