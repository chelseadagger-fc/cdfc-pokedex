import Layout from '@/components/Layout'
import PokeInfo from '@/components/PokeInfo'

const pkmn = 'cyndaquil';

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmn);
  if (!res.ok) { throw new Error('Failed to fetch data') };
  const data = await res.json();
  return data;
}

async function getSpeciesData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + pkmn);
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
          ability0={pokeData.abilities[0].ability.name}
          ability1={pokeData.abilities[1] !== undefined ? pokeData.abilities[1].ability.name : undefined}
          statHP={pokeData.stats[0].base_stat}
          statAtk={pokeData.stats[1].base_stat}
          statDef={pokeData.stats[2].base_stat}
          statSpAtk={pokeData.stats[3].base_stat}
          statSpDef={pokeData.stats[4].base_stat}
          statSpd={pokeData.stats[5].base_stat}
          gender={pokeSpeciesData.gender_rate}
          catchRate={pokeSpeciesData.capture_rate}
          dexEntry={pokeSpeciesData.flavor_text_entries[10].flavor_text}

        />
      </Layout>
    </main>
  )
}
