import React from 'react';

import TextBlock from './TextBlock';

export default {
  component: TextBlock,
  title: 'Components/TextBlock',
}

export const Primary = () => <TextBlock primary>Some paragraph text.</TextBlock>;