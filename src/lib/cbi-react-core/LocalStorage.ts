class LocalStorage {
    set(name: string, value: any){
        localStorage.setItem(name, JSON.stringify(value))
    }

    get(name: string){

        let value = localStorage.getItem(name) as string
        try{
            return JSON.parse(value)
        }catch(error){
            return value
        }
    }
}

export const storage = new LocalStorage()
