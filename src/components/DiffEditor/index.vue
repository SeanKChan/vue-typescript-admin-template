<template>
  <div
    ref="diffEditor"
    class="diff-editor"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Ref } from 'vue-property-decorator'
import * as monaco from 'monaco-editor'

@Component({
  name: 'DiffEditor'
})
export default class extends Vue {
   @Prop({ required: true }) private readonly originalTxt!: string
   @Prop({ required: true }) private readonly modifiedTxt!: string
   @Prop({ required: true, default: 'javascript' }) private readonly languageType!: string

   @Ref('diffEditor') private readonly diffEditorComponent !: HTMLElement

  private diffEditor?: monaco.editor.IStandaloneDiffEditor

  @Watch('originalTxt')
  onOriginalTxtChanged() {
    this.changeEditorModel()
  }

  @Watch('modifiedTxt')
  onModifiedTxtChanged() {
    this.changeEditorModel()
  }

  changeEditorModel() {
    this.diffEditor!.setModel({
      original: monaco.editor.createModel(this.originalTxt, this.languageType),
      modified: monaco.editor.createModel(this.modifiedTxt, this.languageType)
    })
  }

  created(): void {
    // @ts-ignore
    self.MonacoEnvironment = {
      getWorkerUrl: function(moduleId:string, label:string) {
        if (label === 'json') {
          return './js/json.worker.js'
        }
        if (label === 'css') {
          return './js/css.worker.js'
        }
        if (label === 'html') {
          return './js/html.worker.js'
        }
        if (label === 'typescript' || label === 'javascript') {
          return './js/ts.worker.js'
        }
        return './js/editor.worker.js'
      }
    }
  }
  mounted(): void {
    this.diffEditor = monaco.editor.createDiffEditor(this.diffEditorComponent)
  }
}
</script>

<style lang="scss" scoped>
.diff-editor {
  width: 800px;
  height: 600px;
  border: 1px solid grey;
}
</style>
