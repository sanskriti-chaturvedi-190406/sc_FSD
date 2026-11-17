public class Sample{
	int count;
	public Sample(int value){
		this.count = value;
	}
	public static void main(String arr[]){
		System.out.println("Hello World");
		Sample objA = new Sample(10);
		Sample objB = new Sample(20);
		System.out.println("objA count="+objA.count+", objB count="+objB.count);
	}
}	