export const userKeys = {
  users: ["users"] as const,
  me: () => [...userKeys.users, "me"] as const,
  user: (id: number) => [...userKeys.users, id] as const,
};
