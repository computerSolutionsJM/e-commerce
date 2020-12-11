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

const Code = (p) => <code className={styles.inlineCode} {...p} />

const Index = ({ pokemones }) => {


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
        <div className={styles.container}>
          <div className={styles.card}>
            <h1>Environment Variables with Next.js</h1>
            <hr className={styles.hr} />
            <p>
              In the table below you'll see how{' '}
              <a href="https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser">
                environment variables can be exposed to the browser
        </a>{' '}
        with Next.js.
      </p>
            <p>
              In general only <Code>.env.local</Code> or <Code>.env</Code> are needed
        for this, but the table also features the usage of{' '}
              <Code>.env.development</Code> and <Code>.env.production</Code>.
      </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Variable Name</th>
                  <th>Value</th>
                  <th>Added By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NEXT_PUBLIC_ENV_VARIABLE</td>
                  <td>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</td>
                  <td>
                    <Code>.env</Code>
                  </td>
                </tr>
                <tr>
                  <td>NEXT_PUBLIC_ENV_LOCAL_VARIABLE</td>
                  <td>{process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE}</td>
                  <td>
                    <Code>.env.local</Code>
                  </td>
                </tr>
                <tr>
                  <td>NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE</td>

                  <td>{process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}</td>
                  <td>
                    <Code>.env.development</Code>
                  </td>
                </tr>
                <tr>
                  <td>NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE</td>

                  <td>{process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE}</td>
                  <td>
                    <Code>.env.production</Code>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <Code>.env.local</Code> is not added by the example, because it must be
        ignored by git, but you can add it manually:
      </p>
            <pre>
              <code>cp .env.local.example .env.local</code>
            </pre>
            <p>
              Variables in <Code>.env.production</Code> won't be available if the app
        is running in development:
      </p>
            <pre>
              <code>npm run dev</code>
            </pre>
            <p>
              Similarly, variables in <Code>.env.development</Code> won't be available
        if the app is running on production:
      </p>
            <pre>
              <code>npm run build && npm run start</code>
            </pre>
            <p>Once you run the app, you'll see logs like these in the terminal:</p>
            <pre>
              <code>
                info - Loaded env from /home/user/../.env.local{'\n'}
          info - Loaded env from /home/user/../.env.development{'\n'}
          info - Loaded env from /home/user/../.env{'\n'}
              </code>
            </pre>
            <p>
              The order is important, the first loaded env will have a higher
              priority.
      </p>
            <p>
              <Code>.env</Code> will not overwrite any variables defined in{' '}
              <Code>.env.local</Code> or <Code>.env.development</Code>.
      </p>
          </div>
        </div>
      </ContainerMain>
    </>


  )
}





export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    console.log('[Node.js only] ENV_VARIABLE:', process.env.ENV_VARIABLE)
    // console.log('[Node.js only] ENV_LOCAL_VARIABLE:', process.env.ENV_LOCAL_VARIABLE)
    const client = new GraphQLClient(process.env.ENV_VARIABLE, { headers: {} })
    const { obtenerProductos } = await client.request(GET_MESSAGES)
    store.dispatch(obtenerPokemones(obtenerProductos))
  }
)


const mapStateToProps = (state) => ({
  pokemones: state.pokemones.array,
})

export default connect(mapStateToProps, null)(Index)



