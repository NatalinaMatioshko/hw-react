"use strict";

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.isLoggedIn = false;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === "string" && newName.trim().length > 0) {
      this._name = newName;
    } else {
      alert("Name should be a non-empty string!");
    }
  }

  get role() {
    return this._role;
  }

  set role(newRole) {
    if (newRole === "admin" || newRole === "user") {
      this._role = newRole;
    } else {
      alert("Role must be either 'admin' or 'user'!");
    }
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.isLoggedIn = true;
    console.log(`${this.name} logged in.`);
  }

  logout() {
    this.isLoggedIn = false;
    console.log(`${this.name} logged out.`);
  }

  changeName(newName) {
    this.name = newName;
  }

  changePassword(newPassword) {
    if (newPassword.length >= 6) {
      this._password = newPassword;
      console.log("Password changed successfully.");
    } else {
      alert("Password must be at least 6 characters long.");
    }
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
      console.log(`User ${user.name} added.`);
    } else {
      alert("Only User objects can be added!");
    }
  }

  removeUser(nameToRemove) {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.name !== nameToRemove);
    if (this.users.length < initialLength) {
      console.log(`User ${nameToRemove} removed.`);
    } else {
      console.log(`User ${nameToRemove} not found.`);
    }
  }

  changeUserRole(userName, newRole) {
    const user = this.users.find((u) => u.name === userName);
    if (user) {
      user.role = newRole;
      console.log(`Role for user ${userName} changed to ${newRole}.`);
    } else {
      console.log(`User ${userName} not found.`);
    }
  }

  getAllUsers() {
    console.log("User list:");
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log("All users removed.");
  }
}

const user1 = new User("Petro", "user");
console.log(user1.getName());
user1.login();

const admin = new Admin("SuperAdmin");
console.log(admin.getRole());

admin.addUser(user1);
admin.addUser(new User("Maria", "user"));
admin.addUser(new User("Ivan", "user"));

console.log(admin.getAllUsers());

admin.changeUserRole("Maria", "admin");

admin.removeUser("Ivan");
console.log(admin.getAllUsers());

admin.removeAllUsers();
console.log(admin.getAllUsers());
