## This is a minified repo that demonstrate an error with expo-router & Moti.
- The code is generated using `npx create-expo-app --template` with the Typescript navigation template which uses expo-router and added Moti.
- The code runs as expected in Expo Go without `--minify` but throws `RangeError: Maximum call stack size exceeded.
  - ![Simulator Screenshot - iPhone 15 Pro - 2024-01-16 at 16 56 39](https://github.com/lsps9150414/expo-router-moti-bug/assets/5022617/5a367464-3977-47c1-9925-d09faf897c43)

## Steps to reproduce
- `npm run start:minify` with Expo Go
