---
to: 'src/app/(core)/<%= path %>/page.tsx'
---

import Screen<%= Name %> from '@/screens/Screen<%= Name %>/Main'

export default async function Page() {
    return <Screen<%= Name %>/>
}

