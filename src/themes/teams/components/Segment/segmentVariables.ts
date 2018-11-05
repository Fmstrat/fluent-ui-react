import { pxToRem } from '../../../../lib'
import { ComponentVariablesPrepared } from '@stardust-ui/react'

export interface SegmentVariables {
  padding: string
  background: string
  border: string
  borderRadius: string
}

const segmentVariables: ComponentVariablesPrepared = siteVariables => ({
  padding: '1em',
  background: siteVariables.bodyBackground,
  border: '1px solid ' + siteVariables.gray08,
  borderRadius: pxToRem(5),
})

export default segmentVariables
