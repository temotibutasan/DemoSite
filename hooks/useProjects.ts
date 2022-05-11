import useJpycSupportContract from "./useJpycSupportContract";

export interface  ListData {
  iconUrl: string;
  name: string;
  twitterId: string;
  totalJpyc: string;
};

export default function useProjects(
) {
  const contract = useJpycSupportContract();  
  return async() => {
    return await contract.getAllProject();
  };
}
