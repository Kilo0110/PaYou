export default interface User {
  id: number;
  name: string;
  email: string;
  activityStatus: string;
  lastLoginTime: number;
  paymentStatus: string;
  dueDate: number;
  amountDue: number;
  userActivity?: [{ date: number; activity: string; details: string }];
}
