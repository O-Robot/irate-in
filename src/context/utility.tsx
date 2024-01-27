export function setCookie(cname: string, cvalue: string, exdays = 3) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  if (window.location.origin.includes("runplugit.com")) {
    document.cookie = cname + "=" + cvalue + ";" + expires + `; path=/;`;
  } else {
    document.cookie =
      cname +
      "=" +
      cvalue +
      ";" +
      expires +
      `; path=/; domain=${window.location.hostname}`;
  }
}

export function getCookie(cname: string, cookie?: string) {
  let name = cname + "=";
  let tousecookie = cookie || document.cookie;
  let ca = tousecookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// export function deleteCookie(cname: string) {
//   const path =
//     window.location.pathname === "/" ? "/" : window.location.pathname;
//   document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
// }

export function deleteCookie(cname: string) {
  const date = new Date();

  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);

  document.cookie = cname + "=; expires=" + date.toUTCString() + "; path=/";
}
