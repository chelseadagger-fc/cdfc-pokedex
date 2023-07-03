import Layout from '@/components/Layout'
import PokeInfo from '@/components/PokeInfo'

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  if (!res.ok) { throw new Error('Failed to fetch data') };
  const data = await res.json();
  return data;
}

async function getSpeciesData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/pikachu');
  if (!res.ok) { throw new Error('Failed to fetch data') };
  const speciesData = await res.json();
  return speciesData;
}

export default async function Home() {
  const pokeData = await getData();
  const pokeSpeciesData = await getSpeciesData();


  return (
    <main>
      <Layout>
        <PokeInfo 
          name={pokeData.name} 
          id={pokeData.id} 
          height={pokeData.height} 
          weight={pokeData.weight}
          type0={pokeData.types[0].type.name}
          type1={pokeData.types[1] !== undefined ? pokeData.types[1].type.name : undefined}
          dexEntry={pokeSpeciesData.flavor_text_entries[10].flavor_text}
        />
      </Layout>
    </main>
  )
}
