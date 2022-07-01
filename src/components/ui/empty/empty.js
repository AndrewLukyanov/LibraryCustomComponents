import { h } from 'vue';
import './empty.sass';

export default {
  name: 'ui-empty',

  props: {
    image: {
      type: String,
      default: require('../../../icons/empty-box.svg')
    },

    imageSize: {
      type: [Number, String],
      default: 100
    },

    text: {
      type: String,
      default: 'No Data',
    }
  },

  setup(props, context) {
    const {
      image,
      imageSize,
      text
    } = props;

    const slot = context.slots.default
      ? [context.slots.default()]
      : null;

    const img = image
      ? h('img', {
        height: imageSize,
        width: imageSize,
        src: image,
      })
      : null;

    return () => {
      return h('div', {
        class: 'ui-empty'
      }, img, text, slot);
    };
  }
};