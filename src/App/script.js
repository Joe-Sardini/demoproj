import GithubInput from '../GithubInput/index.vue'
import GithubOutput from '../GithubOutput/index.vue'
//import VueFlip from '../FlipCard/index.vue'

export default {
    name: 'App',
    components: {
        'github-input': GithubInput,
        'github-output': GithubOutput,
        //'VueFlip': VueFlip
      },
    data() {
        return {}
    },
}