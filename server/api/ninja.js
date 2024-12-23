export default defineEventHandler(async(event) => {
    // const query =  getQuery(event);
    // const { name } = query

    // const {age} = await readBody(event)
    const apikey = "cur_live_mXPFRuiqUL0LSdebP0k3WUW0ZUgtUOXfKRrkKmQo"

    const {data} = await $fetch(`https://api.currencyapi.com/v3/currencies?apikey=${apikey}`)
    

   
    return data
  });
  