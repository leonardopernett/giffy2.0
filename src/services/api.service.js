
const API_KEY ='BAEklPc6HZ9fi2dHLrixlHI3BfauufR0'
const URL = 'https://api.giphy.com/v1/gifs/search'


export const getGiffy = ( name = 'panda' ) =>{
   return fetch(`${URL}?api_key=${API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`)
    .then((resp) => resp.json())
    .then((resp)=>{
        const { data } = resp
        const { images } = data
        return [...data,images]
    })
}