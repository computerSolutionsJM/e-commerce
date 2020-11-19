import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { connect } from 'react-redux'
import { wrapper } from '../redux/store'
import { obtenerPokemones } from '../redux/pokeDuck'
import { gql, GraphQLClient } from 'graphql-request'
import ContainerMain from '../components/ContainerMain'


const GET_MESSAGES = gql`
{
      messages {
            _id
            title
            content
      }
}
`

const Index = ({ pokemones }) => {


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ogani Template" />
        <meta name="keywords" content="Ogani, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerMain>
        <h1>index</h1>
      </ContainerMain>
    </>


  )
}





// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store, params }) => {
//     const client = new GraphQLClient('https://backend.jhonnyzb.now.sh/', { headers: {} })
//     const { messages } = await client.request(GET_MESSAGES)
//     store.dispatch(obtenerPokemones(messages))
//   }
// )


const mapStateToProps = (state) => ({
  pokemones: state.pokemones.array,
})

export default connect(mapStateToProps, null)(Index)



