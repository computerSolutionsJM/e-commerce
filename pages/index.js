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
        <ContainerMain>
          <h1>index</h1>
        </ContainerMain>

    // <div >
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Dropdown</a>
    //           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <a className="dropdown-item" href="#">Action</a>
    //             <a className="dropdown-item" href="#">Another action</a>
    //             <div className="dropdown-divider"></div>
    //             <a className="dropdown-item" href="#">Something else here</a>
    //           </div>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" href="#">Disabled</a>
    //         </li>
    //       </ul>
    //       <form className="form-inline my-2 my-lg-0">
    //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </nav>


    //   <div className="card-columns">
    //     <div className="card p-3" >
    //       <blockquote className="blockquote mb-0 card-body">
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    //         <footer className="blockquote-footer">
    //           <small className="text-muted">
    //            nuevoo <cite title="Source Title">Source Title</cite>
    //           </small>
    //         </footer>
    //       </blockquote>
    //     </div>
    //     {pokemones.map((item, index) => {
    //       return (
    //         <div className="card p-3" key={index}>
    //           <blockquote className="blockquote mb-0 card-body">
    //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    //             <footer className="blockquote-footer">
    //               <small className="text-muted">
    //                 {item.title} <cite title="Source Title">Source Title</cite>
    //               </small>
    //             </footer>
    //           </blockquote>
    //         </div>
    //       )
    //     })}

    //   </div>



    //   {pokemones.map((item, index) => {
    //     return (
    //       <p key={index}>{item.title}</p>
    //     )
    //   })}



    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
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



