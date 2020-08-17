const { parseAllObjAsync, parseAllJson, parseAllObj, parseAllJsonAsync } =require('./index')

async function get(){
    console.log(await parseAllJsonAsync('C:\\Users\\Bartoshevich\\Downloads\\ddd\\'))
}

get()

// const res = parseAllObj('C:\\Users\\Bartoshevich\\Downloads\\ddd\\')
// console.log(res)
