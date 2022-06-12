import Empty from './empty/empty';
import ProgressBar from './progress-bar/progress-bar.vue';
import Spinner from './spinner/spinner.vue';
import UiGlyph from './ui/glyph/glyph.vue';

export const Components = [

];

export default function(app) {
  app.component('empty', Empty);
  app.component('progress-bar', ProgressBar);
  app.component('spinner', Spinner);
  app.component('ui-glyph', UiGlyph);
}