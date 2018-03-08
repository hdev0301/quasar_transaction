import moment from 'moment';

export default {
  name: 'Buy',
  components: {
  },
  data() {
    return {
      datetimemdl: moment().format(),
      exchange: '',
      exchanges: [
        {
          label: 'BitTrex',
          value: 'bittrex',
        },
        {
          label: 'Binance',
          value: 'binance',
        },
      ],
      buyUnit: '',
      buyUnits: [
        {
          label: 'BTC - Bitcoin',
          value: 'btc',
        },
        {
          label: 'ETH - Ethereum',
          value: 'eth',
        },
      ],
      sellUnit: '',
      sellUnits: [
        {
          label: 'USD - US Dollar',
          value: 'usd',
        },
        {
          label: 'BTC - Bitcoin',
          value: 'btc',
        },
      ],
      amount: 0,
    };
  },
};
