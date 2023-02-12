
import { NextResponse } from "next/server"
import { baseUrl, phpUrl } from "./components/BaseUrl"

export default async function middleware(req) {
  let cookie=req.cookies.get('adminPass2');
  let next=req.url.split(baseUrl)[1];


    if (req.url.includes('/admin')) {
      if (req.method == "HEAD") {
        return NextResponse.error();
      }

      if (!cookie) {
        return NextResponse.rewrite(`${baseUrl}/login?next=${next}&from=adminRoutes`);
      } else {
        try {
          const res=await fetch(`${phpUrl}/authentication/admin-auth.php?cookie=${cookie}`)
          if (res.status !== 404) {
            return NextResponse.next();
          } else {
            return NextResponse.redirect(`${baseUrl}/login?next=${cookie}&from=adminRoutes&leasma=${cookie.value}`);
          }
        } catch (error) {
          console.error(error);
          return NextResponse.rewrite(`${baseUrl}/login?next=${next}&from=adminRoutes`);
        }
      }
      

    }

}