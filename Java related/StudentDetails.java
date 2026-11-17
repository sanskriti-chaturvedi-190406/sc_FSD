class Student{
	int roll, sec;
	String name, course;
	public Student(int roll, String name, String course, int sec){
		this.roll = roll;
		this.name = name;
		this.course = course;
		this.sec = sec;
	}
	public String display(){
		String disp = "Roll = " + roll + "\nName = " + name + "\nCourse = " + course + "\nSection = " + sec;
		return disp;
	}
}

public class StudentDetails{
	public static void main(String arr[]){
		Student stu = new Student(986, "SC", "CSE", 24);
		String result = stu.display();
		System.out.println("Student Details : \n" + result);	
	}
}