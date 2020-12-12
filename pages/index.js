import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { connect } from 'react-redux'
import { wrapper } from '../redux/store'
import { obtenerPokemones } from '../redux/pokeDuck'
import { gql, GraphQLClient } from 'graphql-request'
import ContainerMain from '../components/ContainerMain'



const GET_MESSAGES = gql`
{
  obtenerProductos {
          id
          nombre
          descripcion
          precio
          unidadMedida
          nomenclaturaMedida
          urlImagen
          disponible
          creado
      }
}
`

const Index = ({ obtenerProductos }) => {

  return (
    <>
      <Head>
        <title>Home - Ogani</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ogani Template" />
        <meta name="keywords" content="Ogani, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerMain>
        <h1>index</h1>
       {obtenerProductos.map((item, index)=>{
         return (
           <h1 key={index}>{item.descripcion}</h1>
         )
       })}
      </ContainerMain>
    </>


  )
}





export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    const client = new GraphQLClient(process.env.ENV_LOCAL_VARIABLE, { headers: {} })
    const { obtenerProductos } = await client.request(GET_MESSAGES)
    console.log('entrooo')
    store.dispatch(obtenerPokemones(obtenerProductos))

    return {
      props: {
        obtenerProductos,
      },
      revalidate: 1,
    }
  }
)


const mapStateToProps = (state) => ({
  pokemones: state.pokemones.array,
})

export default connect(mapStateToProps, null)(Index)



