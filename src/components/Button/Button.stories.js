import Button from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    link: '',
    text: '',
    type: '',
  },
}

export const Primary = {
  args: {
    link: 'google.com',
    text: 'Prueba 1',
    type: 'primary',
  },
}

export const Secondary = {
  args: {
    text: 'Prueba 2',
    type: 'secondary',
  },
}
