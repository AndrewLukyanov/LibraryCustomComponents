import Empty from './empty/empty';
import ProgressBar from './progress-bar/progress-bar.vue';
import Spinner from './spinner/spinner.vue';
import UiCheckbox from './ui/checkbox/checkbox.vue';
import UiDnd from './ui/dnd/dnd';
import UiGlyph from './ui/glyph/glyph.vue';
import UiRte from './ui/rte/rte';

export const Components = [

];

export default function(app) {
  app.component('empty', Empty);
  app.component('progress-bar', ProgressBar);
  app.component('spinner', Spinner);
  app.component('ui-checkbox', UiCheckbox);
  app.component('ui-dnd', UiDnd);
  app.component('ui-glyph', UiGlyph);
  app.component('ui-rte', UiRte);
}