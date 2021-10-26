import create from 'zustand';

const planet = create(set => ({
  planet: '',
  nomePlanet: (namePlanet) => set(state => ({ planet: namePlanet}))
}))

export default planet;
