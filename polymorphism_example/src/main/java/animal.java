abstract class Animal {
    public void call(){
        System.out.println("Animal is making a call");
    }
}

public interface IEat {
    public void eat();
}

class Cat extends Animal implements IEat{
    public void call(){
        System.out.println("Meow!");
    }

    public void eat() {
        stomach.add(Fish);
    }
}

class Dog extends Animal implements IEat{
    public void call(){
        System.out.println("Bark!");
    }

    public void eat() {
        stomach.add(Meat);
    }
}class Sheep extends Animal implements IEat{
    public void call(){
        System.out.println("Baaaaa!");
    }

    public void eat() {
            stomach.add(Grass);
        }
    }
}