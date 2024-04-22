import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { JwtPayload, jwtDecode } from 'jwt-decode'
const IsValidToken = (token: any) => {
    const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/
    if (!jwtRegex.test(token?.value)) {
        return false
    }
    try {
        const decoded: any = jwtDecode<JwtPayload>(token?.value)
        const currentTimestamp = Math.floor(Date.now() / 1000)
        return decoded?.exp > currentTimestamp
    } catch (error) {
        return false
    }
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = request.cookies.get('token')
    /**
     * PROTECTED RULES
     * @description
     * Protected rules for all defined in matcher
     */
    if (!token || !IsValidToken(token)) {
        console.log("token invalid");
    }
    return NextResponse.next()
}

export const config = {
    matcher: [],
}
