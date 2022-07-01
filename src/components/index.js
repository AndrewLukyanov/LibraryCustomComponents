import UiCheckbox from './ui/checkbox/checkbox.vue';
import UiDnd from './ui/dnd/dnd';
import UiEmpty from './ui/empty/empty';
import UiGlyph from './ui/glyph/glyph.vue';
import UiProgressBar from './ui/progress-bar/progress-bar.vue';
import UiRte from './ui/rte/rte';
import UiSpinner from './ui/spinner/spinner.vue';

export const Components = [
  {
    name: 'Checkbox',
    to: '/checkbox'
  },
  {
    name: 'Dnd',
    to: '/dnd'
  },
  {
    name: 'Empty',
    to: '/empty'
  },
  {
    name: 'Progress bar',
    to: '/progress-bar'
  },
  {
    name: 'Rte',
    to: '/rte'
  },
  {
    name: 'Spinner',
    to: '/spinner'
  },
];

export default function(app) {
  app.component('ui-checkbox', UiCheckbox);
  app.component('ui-dnd', UiDnd);
  app.component('ui-empty', UiEmpty);
  app.component('ui-glyph', UiGlyph);
  app.component('ui-progress-bar', UiProgressBar);
  app.component('ui-rte', UiRte);
  app.component('ui-spinner', UiSpinner);
}