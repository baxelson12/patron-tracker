export const jwtConstants = {
  secret: process.env.SECRET_KEY || 'devKey',
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