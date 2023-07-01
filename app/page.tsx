import Layout from '@/components/Layout'
import PokeInfo from '@/components/PokeInfo'

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();
  return data;
}

type pokeData = {
  name: string,
  id: number,             // .id
  height: number,
  weight: number
}  

export default async function Home() {
  const pokeData = await getData();

  return (
    <main>
      <Layout>
        <PokeInfo name={pokeData.name} id={pokeData.id} height={pokeData.height} weight={pokeData.weight} />
      </Layout>
    </main>
  )
}
