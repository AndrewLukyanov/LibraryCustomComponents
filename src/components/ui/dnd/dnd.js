import { h } from 'vue';
import { 
  Container,
  Draggable
} from 'vue3-smooth-dnd';
import './dnd.sass';

export default {
  name: 'ui-dnd',

  components: {
    Container,
    Draggable,
  },

  props: {
    containerTag: {
      type: String,
      default: 'div',
    },

    draggableTag: {
      type: String,
      default: 'div',
    },

    orientation: {
      type: String,
      default: 'vertical',
    },

    draggableItemClass: {
      type: String,
      default: '',
    },

    lockAxis: {
      type: String,
      default: 'y',
    },

    items: {
      type: Array,
      default: [],
    },

    dragHandleSelector: String,

    nonDragAreaSelector: String,

    drop: Function,

    getGhostParent: Function,

    shouldAnimateDrop: Function,

    removeOnDropOut: Boolean,
  },

  setup(props, context) {
    return () => {
      const { 
        containerTag,
        draggableTag,
        orientation,
        drop,
        items,
        getGhostParent,
        shouldAnimateDrop,
        removeOnDropOut,
        draggableItemClass,
        lockAxis,
        dragHandleSelector,
        nonDragAreaSelector,
      } = props;

      const args = {
        class: 'ui-dnd',
        tag: containerTag,
        orientation,
        drop,
        getGhostParent,
        shouldAnimateDrop,
        removeOnDropOut,
        lockAxis,
        dragHandleSelector,
        nonDragAreaSelector,
        onClick: {
          ...context.attrs
        }
      };

      const draggable = (item, index) => h(Draggable, {
        class: `${draggableItemClass}`,
        tag: draggableTag,
      }, [context.slots.default(item, index)]);

      return items.length 
        ? h(Container, args, items.map((item, index) => draggable(item, index)))
        : null;
    };
  }
};