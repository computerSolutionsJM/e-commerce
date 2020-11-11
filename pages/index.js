import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { connect  } from 'react-redux'
import { wrapper } from '../redux/store'
import { obtenerPokemones } from '../redux/pokeDuck'
import { gql, GraphQLClient  } from 'graphql-request'


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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
        {pokemones.map((item, index) => {
          return (
            <p key={index}>{item.title}</p>
          )
        })}

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}





export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    const client = new GraphQLClient('https://backend.jhonnyzb.now.sh/', { headers: {} })
    const { messages } =  await client.request(GET_MESSAGES)
    store.dispatch(obtenerPokemones(messages))
  }
)


const mapStateToProps = (state) => ({
  pokemones: state.pokemones.array,
})

export default connect(mapStateToProps, null)(Index)



