import create from 'zustand';

const usePlanet = create(set => ({
  planet: 'Earth',
  nomePlanet: (namePlanet) => set(state => ({ planet: namePlanet}))
}))

export { usePlanet }
