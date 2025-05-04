'use server'
import fs from 'fs/promises'

export const submitAction = async (e) => {
    console.log(e.get('name'), e.get('add'));
    let a = await fs.writeFile('harry.txt', `Hey your name is ${e.get('name')} and your address is  ${e.get('add')}`)
    // console.log(a);
}


