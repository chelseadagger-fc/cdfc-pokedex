// import type { GetStaticProps } from 'next'
 
// type pokeData = {
//   name: string,
//   pkmnNum: number,      // .id
//   pkmnType: string,     // .types.[0-1].type

// }
 
// export const getPokeData: GetStaticProps<{
//   pokeData: pokeData
// }> = async () => {
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   const data = await res.json()
//   return { props: { data } }
// }