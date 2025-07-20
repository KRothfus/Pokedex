export type CacheEntry<T> = {
    createdAt: number,
    val: T,
}
export class Cache {
    [x: string]: any;
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervaliId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

constructor(number: number){
    this.#interval = number
    this.#startReapLoop()
}

  add<T>(key: string, val: T){
    this.#cache.set(key, {createdAt: Date.now(),val: val})
  }

  get<T>(key: string): CacheEntry<T>|undefined{
   return this.#cache.get(key)
  }

  #reap(){
    const keys = this.#cache.keys();
    this.#cache.forEach((value, key)=>{
        
        if(Date.now() - this.#interval > value.createdAt){
            this.#cache.delete(key)
        }
    })
  }

  #startReapLoop(){
    this.#reapIntervaliId = setInterval(()=>{
        this.#reap()
    },this.#interval)
  }

  stopReapLoop(){
    clearInterval(this.#reapIntervaliId)
    this.#reapIntervaliId = undefined
  }
}