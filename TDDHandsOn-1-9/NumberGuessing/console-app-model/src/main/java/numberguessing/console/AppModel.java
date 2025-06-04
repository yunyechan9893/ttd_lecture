package numberguessing.console;

import numberguessing.PositiveIntegerGenerator;

public final class AppModel {

  private static final String NEW_LINE = System.lineSeparator();
  private boolean completed;
  private String output;
  private int answer;
  private boolean singlePlayerMode;

  public AppModel(PositiveIntegerGenerator generator) {
    this.completed = false;
    output = "1: Single player game" + NEW_LINE + "2: Multiplayer game" + NEW_LINE + "3:Exit" + NEW_LINE + "Enter selection: ";
    answer = generator.generateLessThanOrEqualToHundread();
    singlePlayerMode = false;

  }

  public boolean isCompleted() {
    return completed;
  }

  public String flushOutput() {
    return output;
  }

  public void processInput(String input) {
    if (singlePlayerMode) {
      processSinglePlayerGame(input);
      return;
    }

    processModeSelection(input);
  }

  private void processSinglePlayerGame(String input) {
    int guess = Integer.parseInt(input);
    if (guess < answer) {
      output = "Your guess is too low." + NEW_LINE + "Enter your guess: ";
    } else if (guess > answer) {
      output = "Your guess is too high." + NEW_LINE + "Enter your guess: ";
    } else {
      output = "Correct!";
    }
  }

  private void processModeSelection(String input) {
    if (input.equals("1")) {
      output = "Single player game" + NEW_LINE + "I'm thinking of a number between 1 and 100" + NEW_LINE + "Enter your guess: ";
      singlePlayerMode = true;
    } else {
      completed = true;
    }
  }

}
