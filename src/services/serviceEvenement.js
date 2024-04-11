import axios from "axios";

const useEvenement = () => {
  const getAllEvenement = async () => {
    const evenements = await axios.get(`${import.meta.env.VITE_BASE_URL}/evenements`);
    return evenements.data;
  };
  const ajoutEvenement = async (evenement) => {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/evenements`,evenement);
   
 };


  return { getAllEvenement, ajoutEvenement };
};

export default useEvenement;
