import Vue, { VNode } from 'vue'
import lodash from 'lodash'

type LODASH = typeof lodash

declare global {

  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  const _: LODASH
}
