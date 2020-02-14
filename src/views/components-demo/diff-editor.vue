<template>
  <div class="components-container">
    <aside>
      Diff-Editor is base on <a
        href="https://github.com/microsoft/monaco-editor"
        target="_blank"
      >monaco-editor</a>.
    </aside>
    <div class="editor-container">
      <diff-editor
        ref="DiffEditor"
        :language-type="languageType"
        :original-txt="originalTxt"
        :modified-txt="modifiedTxt"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DiffEditor from '@/components/DiffEditor/index.vue'

@Component({
  name: 'DiffEditorDemo',
  components: {
    DiffEditor
  }
})
export default class extends Vue {
  private languageType: string = 'javascript'
  private originalTxt: string = ''
  private modifiedTxt: string = ''

  mounted() {
    Promise.all([fetch('./txt/original.txt').then(response => response.text()),
      fetch('./txt/modified.txt').then(response => response.text())])
      .then((r) => {
        this.originalTxt = r[0]
        this.modifiedTxt = r[1]
      })
  }
}
</script>

<style lang="scss" scoped>
.components-container {
  /*width: 100%;*/
}
</style>
