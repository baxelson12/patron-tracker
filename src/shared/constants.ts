export const jwtConstants = {
  secret: 'devKey',
};

export enum EmployeeRole {
    // Creates admins
    OVERSEER = "overseer",
    // Creates employees,
    // pulls employee/visit data
    ADMIN = "admin",
    // Creates visits
    EMPLOYEE = "employee"
}