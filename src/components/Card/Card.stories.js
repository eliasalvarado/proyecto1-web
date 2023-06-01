import Card from './Card'

export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    tag: '',
    title: '',
    text: '',
    accounts: '',
    checks: [],
    link: '',
  },
}

export const Invididual = {
  args: {
    tag: '1 mes gratis',
    title: 'Individual',
    text: 'Después del periodo de la oferta, cuesta 5.99 USD al mes',
    accounts: '1 cuenta',
    checks: ['Escucha música sin anuncios', 'Reproduce tus canciones en cualquier lugar, incluso sin conexión', 'Reproducción on-demand'],
    link: 'https://www.spotify.com/gt/purchase/offer/default-trial-1m?country=GT',
  },
}

export const IndividualGrande = {
  args: {
    tag: '1 mes gratissssssssssssssssssssss',
    title: 'Individualmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
    text: 'Después del periodo de la oferta, cuesta 5.99 USD al mesDespués del periodo de la oferta, cuesta 5.99 USD al mesDespués del periodo de la oferta, cuesta 5.99 USD al mes',
    accounts: '1 cuenta',
    checks: ['Escucha música sin anunciosEscucha música sin anunciosEscucha música sin anunciosEscucha música sin anunciosEscucha música sin anunciosEscucha música sin anunciosEscucha música sin anunciosEscucha música sin anunciosEscucha música sin anuncios', 'Reproduce tus canciones en cualquier lugar, incluso sin conexión', 'Reproducción on-demand'],
    link: 'https://www.spotify.com/gt/purchase/offer/default-trial-1m?country=GT',
  },
}
