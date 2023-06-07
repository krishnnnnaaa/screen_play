export const getData = async() =>{
  const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
  return await response.json()
}