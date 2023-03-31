import java.util.Scanner;

public class ExpenseTracker {
    public static void main(String[] args) {
        // Create an empty list of expenses
        List<Double> expenses = new ArrayList<>();

        // Create a scanner for user input
        Scanner scanner = new Scanner(System.in);

        // Print a message to the user
        System.out.println("Welcome to the Expense Tracker app!");

        // Run the app in a loop
        while (true) {
            // Print a menu of options to the user
            System.out.println("\nPlease select an option:");
            System.out.println("1. Add an expense");
            System.out.println("2. View expenses");
            System.out.println("3. Exit");

            // Read the user's selection
            int selection = scanner.nextInt();

            // Act on the user's selection
            if (selection == 1) {
                // Add an expense
                System.out.println("Enter the amount of the expense:");
                double amount = scanner.nextDouble();
                expenses.add(amount);
                System.out.println("Expense added!");
            } else if (selection == 2) {
                // View expenses
                double total = 0;
                for (double expense : expenses) {
                    System.out.println("$" + expense);
                    total += expense;
                }
                System.out.println("Total: $" + total);
            } else if (selection == 3) {
                // Exit
                break;
            } else {
                // Invalid selection
                System.out.println("Invalid selection. Please try again.");
            }
        }

        // Close the scanner
        scanner.close();
    }
}