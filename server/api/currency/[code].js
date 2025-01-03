export default defineEventHandler(async (event) =>{

    const { code } =event.context.params
    const {currencyKey} = useRuntimeConfig()


const url = `https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=${code}`;
const {data } = await $fetch(url)

return data
})