import { NextResponse } from "next/server"
import { baseUrl, phpUrl } from "./components/BaseUrl"

export default async function middleware(req) {
  // let cookie=req.cookies.get('adminPass2');
  let next=req.url.split(baseUrl)[1];


    if (req.url.includes('/admin')) {
      if (req.method == "HEAD") {
        return NextResponse.error();
      }

      // if(req.cookies.get('adminPass2')== undefined){

      //   return NextResponse.rewrite(`${baseUrl}/login?next=${next}&from=adminRoutes`); 

      // }else{

        const res=await fetch(`${phpUrl}/authentication/admin-auth.php`,{method: 'POST',credentials:'include'})
      //  const res=await fetch(`${baseUrl}/api/authentication/adminAuth?cookie=${cookie}`)
        if(res.status==404){
        return NextResponse.next();
      }else if(res.status==200){
        return NextResponse.next();
      }else{
        return NextResponse.rewrite(`${baseUrl}/login?next=${next}&from=adminRoutes`);
      }

      // }

    }

}