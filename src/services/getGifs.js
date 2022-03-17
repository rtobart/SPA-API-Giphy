const apiKEY = `U1obM1j9nV6CA974gUaDAtyZQFDIlhz4`

export default function getGifs({ keyword = 'ronoroa zoro' } = {}){
    //en esta linea retornamos el resultado del fetch
    //que lleva el array de gisfts  
    //al componente de react
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
      const { data = [] } = response
      //aqui comprobamos que {data} sea un array para tratarlo con .map
      if(Array.isArray(data)){
        const gifs = data.map(image => {
          const {images, title, id} = image
          const {url} = images.downsized_medium
          return {title, id, url}
        })
        //en esta linea retornamos al fetch
        //la array gifs[]
        return gifs
      }
    })
}