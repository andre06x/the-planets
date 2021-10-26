import create from 'zustand';

const usePlanet = create(set => ({
  planet: '',
  nomePlanet: (namePlanet) => set(state => ({ planet: namePlanet}))
}))

export { planet }
