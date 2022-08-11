import { h } from 'vue';
import './button-group.sass';

export default {
  name: 'button-group',

  props: {
    direction: {
      type: String,
      default: 'row'
    },

    indent: {
      type: Number,
      default: 1
    },

    line: {
      type: String,
      default: 'start'
    }
  },

  setup(props, context) {
    return () => {
      const {
        direction,
        indent,
        line
      } = props;

      const items = context
        .slots
        .default()
        .map(vnode => {
          return h('div', {
            class: `button-group-item p-${indent}`
          }, vnode);
        });

      return h('div', {
        class: `button-group button-group--${line} button-group--${direction} m-n${indent}`
      }, items);
    };
  }
};