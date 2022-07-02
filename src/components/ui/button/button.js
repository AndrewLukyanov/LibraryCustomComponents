import { h } from 'vue';
import './button.sass';

export default {
  name: 'ui-button',

  props: {
    color: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    },

    rounded: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: 'auto'
    }
  },

  setup(props, context) {
    const {
      color,
      disabled,
      rounded,
      size
    } = props;

    const classes = ['ui-button'];

    if (color) {
      classes.push(`ui-button--${color}`);
    }

    if (disabled) {
      classes.push('ui-button--disabled');
    }

    if (rounded) {
      classes.push('ui-button--rounded');
    }

    if (size) {
      classes.push(`ui-button--${size}`);
    }

    const args = {
      class: classes,
      type: 'button',
      disabled: disabled
    };

    const slot = context.slots.default
      ? [context.slots.default()]
      : null;

    return () => {
      return h('button', args, slot);
    };
  }
};