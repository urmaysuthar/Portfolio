import java.util.Scanner;

public class ExpenseTracker {

  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    double totalExpenses = 0;

    while (true) {
      System.out.println("Enter an expense amount or type 'exit' to quit: ");
      String expense = input.nextLine();

      if (expense.equalsIgnoreCase("exit")) {
        break;
      }

      double expenseAmount = Double.parseDouble(expense);
      totalExpenses += expenseAmount;
    }

    System.out.println("Total expenses: $" + totalExpenses);
  }
}
