const edamamApi = {
    app_id : process.env.REACT_APP_ZEST_ID,
    app_key : process.env.REACT_APP_ZEST_KEY,
}

export const fetchData = async (recipeName) => {
    const {app_id, app_key} = edamamApi;

    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json()
        return response;
    }
    catch(e){
        console.log(e, "Something went wrong")
        return e
    }
}

export const fetchTabData = async (recipeName) => {
    const {app_id, app_key} = edamamApi;

    try{
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeName}&app_id=${app_id}&app_key=${app_key}`)
        const response = await data.json()
        return response;
    }
    catch(e){
        console.log(e, "Something went wrong")
        return e
    }
}