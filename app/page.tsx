import Layout from '@/components/Layout'
import PokeInfo from '@/components/PokeInfo'

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  if (!res.ok) { throw new Error('Failed to fetch data') }
  const data = await res.json();
  return data;
}

export default async function Home() {
  const pokeData = await getData();

  return (
    <main>
      <Layout>
        <PokeInfo 
          name={pokeData.name} 
          id={pokeData.id} 
          height={pokeData.height} 
          weight={pokeData.weight}
          types={pokeData.types[0].type.name}
        />
      </Layout>
    </main>
  )
}
