public class michael{
    String name;
    int age;

    Void displayinfo(){
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);

    }

    public static Void main(String[] arg){
        Person Person1 = new Person();
        Person1.name = "michael";
        Person1.age = 20;
        Person1.displayinfo();
    }
}