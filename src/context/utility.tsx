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

export function deleteCookie(cname: string) {
  if (window.location.origin.includes("vercel.app")) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/ ogooluwani-iratein.vercel.app/`;
  } else {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}
