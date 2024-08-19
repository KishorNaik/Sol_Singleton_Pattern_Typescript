export class Singleton {

    private static instance: Singleton;
    private constructor() { }

    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public demo():void{
        console.log("Singleton Demo")
    }
    
}