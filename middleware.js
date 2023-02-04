import { NextResponse } from "next/server"
import { baseUrl, phpUrl } from "./components/BaseUrl"

export default async function middleware(req) {
  let cookie=req.cookies.get('adminPass2');
  let next=req.url.split(baseUrl)[1];


    if (req.url.includes('/admin')) {
      if (req.method == "HEAD") {
        return NextResponse.error();
      }

      // if(req.cookies.get('adminPass2')== undefined){

      //   return NextResponse.rewrite(`${baseUrl}/login?next=${next}&from=adminRoutes`); 

      // }else{

        const res=await fetch(`${phpUrl}/authentication/admin-auth.php?cookie=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovLzIzNDU2NzkwOTAuMDAwd2ViaG9zdGFwcC5jb20iLCJpYXQiOjE2NzU1NDg3OTUsIm5iZiI6MTY3NTU0ODc5NSwiZXhwIjoxNjc1NTQ5NTE1LCJhdWQiOiJodHRwczovL290b3RlY2gtYmxvZy52ZXJjZWwuYXBwLyIsImRhdGEiOiJhZG1pbkBnbWFpbC5jb20ifQ.ylmR65ttZlmX6BX979kX5PROEwv4puf-Vs24TnOFqQA`)
      //  const res=await fetch(`${baseUrl}/api/authentication/adminAuth?cookie=${cookie}`)
        if(res.status!==404){
        return NextResponse.next();
      }else{
        return NextResponse.rewrite(`${baseUrl}/login?next=${next}&from=adminRoutes`);
      }

      // }

    }

}