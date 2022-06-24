import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema, DOMParser } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from 'prosemirror-example-setup';

import 'prosemirror-example-setup/style/style.css';
import 'prosemirror-gapcursor/style/gapcursor.css';
import 'prosemirror-menu/style/menu.css';
import 'prosemirror-view/style/prosemirror.css';
import './rte.sass';

import { h } from 'vue';

const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
  marks: schema.spec.marks
});

export default {
  name: 'ui-rte',

  mounted() {
    new EditorView(document.querySelector('.ui-rte-content'), {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema)
          .parse(document.querySelector('.ui-rte-result')),
        plugins: exampleSetup({ 
          schema: mySchema 
        })
      })
    });
  },

  render() {
    const content = h('div', {
      class: 'ui-rte-content'
    });

    const html = h('div', {
      class: 'ui-rte-result'
    });

    return  h('div', {
      class: 'ui-rte'
    }, content, html );
  }
};