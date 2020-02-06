//
class Duck {
    quackBehavior;
    FlyBehavior;
    display() {
        console.log('me estoy mostrando :v');
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    performFly() {
        this.FlyBehavior.fly();
    }
    setQuackBehavior(inyectoQuack) {
        this.quackBehavior = inyectoQuack;
    }
    setFlyBehavior(inyectoVuelo) {
        this.FlyBehavior = inyectoVuelo;
    }
}
class MallarDuck extends Duck {
    /*display(){
       console.log("Soy un Pato Realllll!!!!");
    } */
}
class RedHeadDuck extends Duck {
}
class DecoyFuck extends Duck {
}
class RubberFuck extends Duck {
}
/*class QuackBehaviors {
   quack(){
     console.log('Yo Quackeoooo!!!')
   }
 }
 class FlyBehaviors {
 fly(){
   console.log('Voy Volandoooo!!!')
 }
 }*/
class FlyWithWings {
    fly() {
        console.log('Vuelooo!! con Alas')
    }
}
class FlyNoWay {
    fly() {
        console.log('No vuelooo!!')
    }
}
class Quack {
    quack() {
        console.log('Quack Quack!!!!!')
    }
}
class MuteQuack {   
    quack() {
        console.log('Shito tu no hablas')
    }
}
class Squeak {
    quack() {
        console.log('Squeak Squeakkkk!!')
    }
}
class ElevateCohetes {
    fly() {
        console.log('Me elevooooo!! o.O');
    }
}