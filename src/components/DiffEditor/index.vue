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
  mounted(): void {
    this.diffEditor = monaco.editor.createDiffEditor(this.diffEditorComponent, {
      automaticLayout: true
    })
  }
}
</script>

<style lang="scss" scoped>
.diff-editor {
  width: 100%;
  height: 65vh;
  border: 1px solid grey;
}
</style>
