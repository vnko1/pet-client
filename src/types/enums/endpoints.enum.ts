export enum EndpointsEnum {
  Articles = "/articles",
  Sponsors = "/sponsors",
  Register = "/auth/register",
  Login = "/auth/login",
  Refresh = "/auth/refresh",
  Profile = "/profile",
  Logout = "/auth/logout",

  Pets = "/pets",
  Notices = "/notices",
  Notice = Notices + "/notice",
  Favorites = Notices + "/favorites",
  Owner = Notices + "/owner",
}
