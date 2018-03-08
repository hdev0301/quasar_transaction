import { openURL } from 'quasar';

export default {
  name: 'AddTransaction',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
