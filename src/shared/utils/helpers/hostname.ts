export default function hostname(url: string): string {
  try{
    const cUrl = new URL(url);
    return cUrl.port ? `${cUrl.hostname}:${cUrl.port}` : `${cUrl.hostname}`;
  }
  catch{
    return "";
  }
}
