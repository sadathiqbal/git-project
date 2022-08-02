export function handler(name:string) {
    console.log(handlerHelper(name));
} 

export function handlerHelper(name:string){
    return `Hello ${name}`
}
