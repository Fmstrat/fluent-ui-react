import * as React from 'react'
import { Avatar } from '@stardust-ui/react'

const status = {
  styles: { backgroundColor: 'green' },
  icon: 'stardust-checkmark',
  title: 'Available',
}

const AvatarExampleExcludedInitialsShorthand = () => (
  <div>
    <Avatar name="John Doe (Software Developer)" status={status} />
    &emsp;
    <Avatar name="John Doe {Software Developer}" status={status} />
    &emsp;
    <Avatar name="John Doe [Software Developer]" status={status} />
    &emsp;
    <Avatar name="John A B Doe" status={status} />
  </div>
)

export default AvatarExampleExcludedInitialsShorthand
