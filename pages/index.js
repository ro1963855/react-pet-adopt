import Head from 'next/head'

function Home({ data }) {
  return (
    <div>
      <Head>
        <title>領養你的寵物</title>
        <meta name="description" content="幫助大家在各地收容所領養到想要的寵物" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="navbar navbar-dark bg-dark">
          <nav className="container-fluid">
            <a className="navbar-brand" href="#">寵物領養</a>
          </nav>
        </header>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home