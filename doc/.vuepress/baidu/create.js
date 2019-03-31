import Vue from 'vue';

export default {
	mounted() {
		if(this.hasBaidu) {
			return;
		}
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?68a2982b86f566cea2f90805ace87cfc";
		var s = document.getElementsByTagName("script")[0]; 
		s.parentNode.insertBefore(hm, s);
		this.hasBaidu = true;
		this.$router.beforeEach((to, from, next) => {
			window._hmt && _hmt.push(['_trackPageview', location.pathname + location.hash])
			next()
		})

		this.$router.afterEach(() => {
			// window._hm && window._hm.push()
		})
	}
}